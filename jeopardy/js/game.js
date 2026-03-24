// Game State Manager

const TEAM_COLORS = [
  { bg: "#e63946", text: "#fff", light: "#ffd6d9", name: "Red" },
  { bg: "#2196f3", text: "#fff", light: "#d3e8ff", name: "Blue" },
  { bg: "#4caf50", text: "#fff", light: "#d4edda", name: "Green" },
  { bg: "#ff9800", text: "#fff", light: "#ffe5b4", name: "Orange" },
  { bg: "#9c27b0", text: "#fff", light: "#e8d0f5", name: "Purple" },
  { bg: "#009688", text: "#fff", light: "#c8f0ec", name: "Teal" }
];

const GAME = {
  teams: [],
  selectedTopics: [],
  questions: {},
  answered: new Set(),
  currentQuestion: null,
  currentTeamIndex: 0,
  phase: "setup",

  init(teams, selectedTopics) {
    this.teams = teams.map((name, i) => ({
      id: i,
      name: name.trim(),
      score: 0,
      color: TEAM_COLORS[i % TEAM_COLORS.length]
    }));
    this.selectedTopics = selectedTopics;
    this.answered = new Set();
    this.currentQuestion = null;
    this.currentTeamIndex = 0;
    this.phase = "loading";
  },

  setQuestions(questions) {
    this.questions = questions;
    this.phase = "board";
  },

  getTopic(topicId) {
    return TEXTBOOK_CONTENT.topics.find(t => t.id === topicId);
  },

  openQuestion(topicId, points) {
    const key = `${topicId}-${points}`;
    if (this.answered.has(key)) return null;
    const question = AI_ENGINE.getQuestion(topicId, points);
    if (!question) return null;
    this.currentQuestion = { topicId, points, key, ...question };
    this.phase = "question";
    return this.currentQuestion;
  },

  resolveQuestion(teamId, correct) {
    if (!this.currentQuestion) return;
    const { key, points } = this.currentQuestion;
    this.answered.add(key);
    if (correct && teamId !== null) {
      const team = this.teams.find(t => t.id === teamId);
      if (team) team.score += points;
    }
    this.currentQuestion = null;
    if (correct) {
      this.currentTeamIndex = (this.currentTeamIndex + 1) % this.teams.length;
    }
    this.phase = this.isComplete() ? "final" : "board";
  },

  skipQuestion() {
    if (!this.currentQuestion) return;
    this.answered.add(this.currentQuestion.key);
    this.currentQuestion = null;
    this.currentTeamIndex = (this.currentTeamIndex + 1) % this.teams.length;
    this.phase = this.isComplete() ? "final" : "board";
  },

  isAnswered(topicId, points) {
    return this.answered.has(`${topicId}-${points}`);
  },

  isComplete() {
    const total = this.selectedTopics.length * 5;
    return this.answered.size >= total;
  },

  getCurrentTeam() {
    return this.teams[this.currentTeamIndex];
  },

  getWinner() {
    return [...this.teams].sort((a, b) => b.score - a.score)[0];
  },

  getRankedTeams() {
    return [...this.teams].sort((a, b) => b.score - a.score);
  }
};
