// AI Question Generation Engine
// Uses Claude API to generate Jeopardy questions from textbook content

const AI_ENGINE = {
  model: "claude-sonnet-4-20250514",
  generatedQuestions: {}, // Cache: topicId -> { 200: [...], 400: [...], ... }
  isGenerating: false,

  // Build the prompt for a specific topic
  buildPrompt(topic, pointValues) {
    return `You are creating Jeopardy questions for a VCE Physical Education class studying "${topic.name}" from the textbook chapter: "${TEXTBOOK_CONTENT.chapter}".

Here is the specific textbook content for this topic:
---
${topic.content}
---

Generate exactly ${pointValues.length} Jeopardy-style questions, one for each of these point values: ${pointValues.join(", ")}.

STRICT RULES:
- Questions MUST be based ONLY on the textbook content provided above. Do not add any external knowledge.
- Write questions in proper Jeopardy style: the "question" is actually a statement/clue, and the "answer" is phrased as a question (e.g. "What is..." or "What are...")
- Difficulty must increase with point value: 200 = recall/recognition, 400 = understanding, 600 = application, 800 = analysis, 1000 = synthesis/evaluation
- Each question must be distinct — no repetition of content between point values
- Keep clues concise and unambiguous
- Answers must be specific and directly from the textbook

Return ONLY a valid JSON array (no markdown, no explanation) in this exact format:
[
  {
    "points": 200,
    "clue": "The clue/statement goes here",
    "answer": "What is the answer?",
    "category": "${topic.name}"
  },
  ...
]`;
  },

  // Generate questions for a single topic
  async generateForTopic(topic, pointValues = [200, 400, 600, 800, 1000]) {
    const prompt = this.buildPrompt(topic, pointValues);

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: this.model,
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }]
      })
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || "API error");
    }

    const data = await response.json();
    const rawText = data.content.map(b => b.text || "").join("").trim();

    // Strip markdown fences if present
    const cleaned = rawText.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
    const questions = JSON.parse(cleaned);

    // Index by point value
    const indexed = {};
    for (const q of questions) {
      indexed[q.points] = q;
    }
    return indexed;
  },

  // Generate questions for all selected topics in parallel
  async generateAll(selectedTopics, onProgress) {
    this.isGenerating = true;
    this.generatedQuestions = {};
    const pointValues = [200, 400, 600, 800, 1000];
    const total = selectedTopics.length;
    let completed = 0;

    const promises = selectedTopics.map(async (topicId) => {
      const topic = TEXTBOOK_CONTENT.topics.find(t => t.id === topicId);
      if (!topic) return;

      try {
        const questions = await this.generateForTopic(topic, pointValues);
        this.generatedQuestions[topicId] = questions;
        completed++;
        if (onProgress) onProgress(completed, total, topic.name);
      } catch (err) {
        console.error(`Failed to generate questions for ${topicId}:`, err);
        throw new Error(`Failed to generate questions for "${topic.name}": ${err.message}`);
      }
    });

    await Promise.all(promises);
    this.isGenerating = false;
    return this.generatedQuestions;
  },

  // Get a specific question
  getQuestion(topicId, points) {
    return this.generatedQuestions?.[topicId]?.[points] || null;
  }
};
