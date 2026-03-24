// Textbook content extracted from Chapter 1: Structure and Functions of the Musculoskeletal System
// This content is passed to the Claude API to generate Jeopardy questions

const TEXTBOOK_CONTENT = {
  chapter: "Chapter 1: Structure and Functions of the Musculoskeletal System",
  subject: "VCE Physical Education Units 1 & 2",

  topics: [
    {
      id: "skeletal_system",
      name: "Skeletal System",
      icon: "🦴",
      description: "Bones, functions & structure",
      content: `
The musculoskeletal system is made up of the skeletal system (bones, joints, ligaments and tendons) and muscular system (muscles). The skeletal system is made up of 206 bones and encompasses all the bones, every joint and corresponding ligaments.

The skeletal system has five main functions:
- Body movement (the most important function in Physical Education)
- Framework
- Protection
- Mineral storage
- Production of red blood cells

Body movement: The human body has 206 bones, all of which provide sites for muscle attachment. The bones act as levers and work with the muscular system to create movement. When a muscle contracts, it pulls on the bone to which it is attached and thus movement occurs.

Framework and protection: The skeleton provides a solid framework for the body and helps battle the forces of gravity. The rib cage protects the heart and lungs.

Types of bone tissue:
- Compact bone: found in the shaft (diaphysis) of the long bone, extremely strong, contains collagen for rigidity and tensile strength
- Cancellous bone (spongy bone): less dense, provides shock absorption at the end of long bones

Mineral storage: Bone tissue stores calcium, phosphorus, sodium and potassium. Calcium assists with muscular activity, nerve transmission, enzyme activity and blood clotting.

Production of red blood cells: Occurs within the cavity of long bones. Haemoglobin, a protein inside red blood cells, transports oxygen molecules from the lungs to the body.

Major bones: Skull (cranium), Mandible, Cervical spine, Clavicle, Scapula, Sternum, Humerus, Ribs, Lumbar spine, Ulna, Radius, Ilium, Sacrum, Carpals, Metacarpals, Phalanges, Pubic bone, Ischium, Femur, Patella, Tibia, Fibula, Tarsals, Metatarsals

Types of bone:
1. Short bones: roughly cubical, e.g. carpals of the wrist and tarsals of the foot
2. Long bones: longer than wide, hollow shaft containing marrow, e.g. femur, phalanges, humerus
3. Sesamoid bones: small bones developed in tendons, e.g. patella at the knee joint
4. Flat bones: flat areas for muscle attachment, e.g. scapula, ribs, sternum, skull
5. Irregular bones: no regular shape, e.g. vertebrae and bones of the face

Vertebral column sections:
- Cervical: 7 vertebrae, supports the head, atlas and axis allow head movement
- Thoracic: 12 vertebrae, connects ribcage to vertebral column
- Lumbar: 5 vertebrae, supports body weight, attachment for large muscles
- Sacrum: 5 fused vertebrae, fused part of pelvis
- Coccyx: 4 fused vertebrae, base of vertebral column, site for muscle attachment

Epiphyseal plates (growth plates): growth centres of developing bones, found at the ends of the diaphysis, majority of bone growth occurs during infancy and adolescence.
      `
    },
    {
      id: "joints",
      name: "Joints & Movement",
      icon: "🔗",
      description: "Classification, joint types & anatomical movements",
      content: `
Classification of joints:
- Fibrous (immoveable) joints: offer no movement. Examples: skull, pelvis, sacrum, sternum
- Cartilaginous (slightly moveable) joints: joined by cartilage, allow small movements. Examples: vertebrae, where ribs join sternum
- Synovial (freely moveable) joints: offer full range of movement. Examples: knee, shoulder

Connective tissue:
- Cartilage: smooth, slightly elastic tissue. Hyaline cartilage coats ends of bones in synovial joints. Protects bones by absorbing impact.
- Ligaments: cross over joints, join bone to bone, slight elasticity, provide stability at joints, prevent dislocation. If seriously damaged may require surgery.
- Tendons: inelastic and very strong, attach muscles to bones, allow movement by helping muscles pull through joints

Synovial joint qualities:
- Free movement in at least one direction
- Cartilage for protection and cushioning, reduces friction
- Ligaments that secure bones and allow controlled ranges of movement
- Joint capsule providing stability
- Synovial membrane secreting synovial fluid for lubricated movement

Six types of synovial joints:
1. Ball and socket: wide range of movement (adduction/abduction, flexion/extension, rotation), e.g. hip, shoulder
2. Hinge: one direction only (flexion/extension), e.g. elbow, knee
3. Pivot: rotation of one bone about another, e.g. atlas/axis in neck, radius and ulna in forearm
4. Saddle: two directions (adduction/abduction, flexion/extension), e.g. thumb
5. Condyloid: two directions (adduction/abduction, flexion/extension), e.g. wrist
6. Gliding: gliding/sliding movements, e.g. carpals of wrist, tarsals of ankle

Anatomical position: standing erect, facing forward with arms by the side and palms facing forward.

Terms of reference:
- Superior: towards the head
- Inferior: towards the feet
- Anterior: towards the front
- Posterior: towards the back
- Medial: towards the midline
- Lateral: towards the outer side
- Proximal: closer to the trunk
- Distal: further from the trunk
- Superficial: towards the surface
- Deep: towards the inner part
- Prone: face down
- Supine: face up

Anatomical movements:
- Flexion: decrease in angle of joint (bending elbow or knee)
- Extension: increase in angle of joint (straightening elbow or knee)
- Abduction: movement away from midline (lifting arm out to side in star jump)
- Adduction: movement back towards midline (returning arm to body)
- Circumduction: circular motion of bone end (drawing circle with straight arm)
- Rotation: movement around a central axis (turning head side to side)
- Pronation: rotation of hand so thumb moves inward, palm facing down
- Supination: rotation of hand so thumb moves outward, palm facing up
- Eversion: movement of sole of foot away from midline (twisting ankle out)
- Inversion: movement of sole of foot towards midline (twisting ankle in)
- Dorsi flexion: decrease in angle between foot and lower leg (raising toes upward)
- Plantar flexion: increase in angle between foot and lower leg (pointing toes to ground)
- Elevation: movement of shoulders towards head (shrugging)
- Depression: movement of shoulders away from head (returning to normal)
      `
    },
    {
      id: "muscular_system",
      name: "Muscular System",
      icon: "💪",
      description: "Major muscles, types & functions",
      content: `
The human body has over 600 muscles. Functions of the muscular system:
1. Body movement: voluntary muscles attached to bones, controlled by central nervous system
2. Adequate posture: muscles maintain continuous tone to resist gravity. Upper back muscles (trapezius, rhomboids, latissimus dorsi) strongly influence posture.
3. Essential bodily functions: involuntary muscles control heart, digestive and respiratory functions

Three types of muscle:
1. Smooth muscle: found in hollow organs (walls of digestive tract, bladder, blood vessels), involuntary, slow sustained rhythmic contractions, fatigue resistant
2. Cardiac muscle: found only in heart, fibres intertwined, involuntary, difficult to fatigue, nerve impulse relayed cell to cell causing rhythmic contractions
3. Skeletal muscle: attaches to skeleton, striated (striped appearance), voluntary control, responsible for human movement

Major skeletal muscles and their actions:
Shoulder/chest (anterior):
- Deltoid: shoulder abduction, flexion, extension (e.g. bowling in cricket)
- Pectoralis major: shoulder flexion (e.g. tennis forehand)
- Serratus anterior: shoulder abduction (e.g. boxing punch)

Shoulder/back (posterior):
- Trapezius: scapula elevation (e.g. shoulder shrug)
- Latissimus dorsi: shoulder adduction (e.g. butterfly stroke in swimming)

Arm (anterior):
- Biceps brachii: elbow flexion (e.g. pull-up)
- Wrist flexors: wrist flexion (e.g. wrist curl)

Arm (posterior):
- Triceps brachii: elbow extension (e.g. throwing a javelin)
- Wrist extensors: wrist extension (e.g. squash backhand)

Trunk:
- Rectus abdominis: trunk flexion (e.g. sit-up)
- Obliques: trunk flexion and rotation
- Erector spinae: trunk extension and rotation (e.g. gymnastics back-flip)

Pelvis/Hip:
- Sartorius: hip flexion and knee flexion (e.g. breaststroke kick)
- Adductors: hip adduction (e.g. riding a horse)
- Gluteus maximus: hip extension and abduction (e.g. running)

Leg (anterior):
- Quadriceps femoris (rectus femoris, vastus lateralis, vastus intermedius, vastus medialis): hip flexion and knee extension (e.g. kicking/cycling)
- Tibialis anterior: dorsi flexion (e.g. freestyle kick)

Leg (posterior):
- Hamstrings (biceps femoris, semitendinosus, semimembranosus): hip extension and knee flexion (e.g. running)
- Gastrocnemius: plantar flexion (e.g. calf raises)
- Soleus: plantar flexion (e.g. ballet toe point)
      `
    },
    {
      id: "muscle_fibres",
      name: "Muscle Fibres",
      icon: "🔬",
      description: "Fibre types, arrangement & sliding filament theory",
      content: `
Common features of all muscles:
- Nervous control: nerve stimuli control muscle action
- Excitability: receive and respond to stimulus
- Contractility: contract and become thicker
- Extensibility: capacity to stretch when force applied
- Elasticity: return to original size/shape once stretched
- Atrophy: decrease in size due to injury, illness or lack of exercise
- Hypertrophy: increase in size with increased activity

Muscle fibre arrangement:
- Fusiform: fibres run length of muscle belly in same direction as tendon. Designed for mobility, large range contractions, low force (e.g. sartorius, biceps)
- Pennate: fibres run at angles to tendons, designed for strength and power:
  * Unipennate: fibres on one side of central tendon (e.g. semimembranosus, tibialis anterior)
  * Bipennate: fibres on either side of central tendon (e.g. rectus femoris)
  * Multipennate: fibres branch from several tendons, greatest force production (e.g. deltoid)
- Convergent: fibres radiate from main tendon, compromise between fusiform and pennate, strength/power with mobility (e.g. pectoralis major)

Structure of skeletal muscles:
- Epimysium: outer layer of connective tissue covering whole muscle, thickens to form tendons
- Fasciculi: bundles of muscle fibres running length of muscle
- Endomysium: connective tissue surrounding each individual muscle fibre
- Perimysium: connective tissue surrounding fasciculi

The muscle fibre contains:
- Sarcolemma: cell membrane
- Sarcoplasm: gel-like fluid containing mitochondria (aerobic energy), myoglobin (carries oxygen), fat/carbohydrate/protein (energy), ATP (immediate energy), enzymes, actin and myosin myofilaments

Sarcomeres: the smallest contractile unit, bounded by Z lines. Contains:
- I band: actin only
- A band: both actin and myosin (length of myosin)
- H zone: myosin only (gap between actin ends)

Sliding filament theory:
1. At rest: little contact between actin and myosin
2. Nerve impulse arrives at neuromuscular junction → calcium released
3. Calcium allows myosin to attach to actin
4. ATP breakdown enables cross bridges on myosin to attach to actin and pull in 'rowing' action
5. Cross bridges detach and reattach, shortening sarcomere
6. Z lines move closer, I band reduces, A band stays same, H zone may disappear
7. Every sarcomere shortens → whole muscle contracts
8. Muscle relaxes when actin and myosin lose contact (cross bridges detach)

Muscle tone: some myosin stays attached to actin, muscle never completely relaxes, allows quick activation, helps maintain posture.

Three types of muscle fibres:
Type 1 (Slow-twitch oxidative):
- Red in colour, small fibre size, small motor neuron
- High resistance to fatigue, low force production, slow contraction speed
- High mitochondrial density, high capillary density, high myoglobin content
- High oxidative capacity, low glycolytic capacity
- Major fuel: triglycerides
- Suited to: aerobic, low-intensity, longer duration (marathons, triathlons, cross-country skiing)

Type 2A (Fast-twitch oxidative):
- Pinkish in colour, medium fibre size, large motor neuron
- Medium resistance to fatigue, medium force production, fast contraction
- High mitochondrial density, high capillary density, high myoglobin content
- Medium oxidative capacity, high glycolytic capacity
- Major fuel: creatine phosphate/glycogen
- Suited to: middle-distance running and swimming (aerobic and anaerobic elements)

Type 2B (Fast-twitch glycolytic):
- White in colour, large fibre size, very large motor neuron
- Low resistance to fatigue, high force production, very fast contraction
- Low mitochondrial density, low capillary density, low myoglobin content
- Low oxidative capacity, high glycolytic capacity
- Major fuel: creatine phosphate/glycogen
- Suited to: high-intensity, short-duration anaerobic work (sprinting, throwing, weightlifting)

On average, most muscles contain about 50% fast-twitch and 50% slow-twitch fibres. Proportions are genetically determined.
      `
    },
    {
      id: "neural_control",
      name: "Neural Control",
      icon: "⚡",
      description: "Motor units, size principle & force production",
      content: `
Neural control of muscles - initiation of muscular activity:
1. Brain sends electrical nervous message
2. Message travels down spinal cord to motor nerves branching from spinal cord
3. Motor nerve separates into smaller motor neurons attaching to individual muscles
4. Gap at neuromuscular junction (synaptic cleft) crossed using acetylcholine (neurotransmitter)
5. Muscle contracts for as long as brain sends messages and energy lasts

Motor units:
- A motor unit = one motor neuron + all muscle fibres it stimulates
- One motor neuron does NOT stimulate the entire muscle
- Small motor units: precise movements (hand muscles for writing, typing, throwing darts) — one neuron stimulates few fibres
- Large motor units: gross movements (quadriceps for running, kicking) — one neuron stimulates thousands of fibres

All or nothing principle:
- Nerve impulse will not stimulate muscle fibres until reaching threshold level
- Once threshold reached, ALL fibres of the motor unit contract simultaneously and maximally
- If impulse too weak, NO fibres contract at all
- Intensity of contractions varied by:
  1. Number of motor units stimulated (more for heavy lifting, fewer for golf putting)
  2. Frequency of impulses arriving at motor unit (faster frequency = greater contraction)

Size principle (Henneman principle):
- Recruitment starts with small motor units and progresses to large motor units
- Small motor units recruited first at low muscle forces (e.g. walking)
- Increase in force (walking → sprinting) → recruitment of larger motor units

Small motor units characteristics:
- Slow contracting
- Easily excitable and recruited
- Fatigue resistant
- Used for prolonged activities (walking, posture control)

Large motor units characteristics:
- Fast contracting
- Less easily excitable and recruited
- Rapidly fatigable
- Used for high force activities (sprinting, hitting, jumping)

Motor unit activation, recruitment and force production:
Force development depends on:
- Number and type of motor units activated
- Size of the muscle
- Initial length of muscle being activated
- Angle of the joint
- Muscle's speed of action

Fast-twitch motor units produce more force because:
- Larger cell body and more axons
- Innervate 300-800 muscle fibres (vs slow-twitch: 10-180 fibres)
- Large muscles have more fibres = more force
      `
    },
    {
      id: "contractions",
      name: "Contractions & Levers",
      icon: "🏋️",
      description: "Types of contraction, muscle roles & lever systems",
      content: `
Three types of muscular contractions:

1. Concentric contraction:
- Muscle length shortens as force is produced
- Muscle develops sufficient tension to overcome resistance
- Example: biceps curl upward phase (biceps shortens to lift dumbbell)

2. Eccentric contraction:
- Muscle length lengthens as force is produced
- Occurs to decelerate motion of a joint, resist gravity
- Example: lowering body during sit-up, lowering during squat, setting down an object
- Similar to a drawbridge being lowered with control

3. Isometric contraction:
- Force is developed but no change in muscle length
- Produces the most force, causes muscle to tire quickly
- Examples: rugby scrum, rock climbing, amateur wrestling holds, trapeze in sailing, grip on stick/racquet, plank exercise

Muscle origin and insertion:
- Origin: fixed end, attached to more stationary bone, tends to be more proximal, often widespread to anchor the muscle
- Insertion: moving end, attached to more moveable bone, tends to be more distal, attaches via strong non-elastic tendon
- When muscle contracts, origin and insertion drawn together, shortening muscle

Four muscle roles during movement:
1. Agonist (prime mover): causes the major action
2. Antagonist: relaxes and lengthens to allow movement, causes opposite action to agonist
3. Synergist (assistant): assists agonist, reduces excessive movements
4. Stabiliser (fixator): ensures joint remains stable, contracts minimally

Example — elbow flexion: biceps = agonist; triceps = antagonist; brachialis and brachioradialis = synergists; abdominals/erector spinae = stabilisers for netball shooting

Reciprocal inhibition:
- Process of agonist contracting while antagonist relaxes
- Allows efficient, smooth movement
- Nervous system controls timing and force for coordinated movement
- Beginners appear jerky because reciprocal inhibition is not yet coordinated

Levers:
A lever is a rigid structure that rotates around a fixed point. Three components:
- Axis: the joint in the body
- Force: the muscles that contract to generate force
- Resistance: the bone of the body and whatever is being held/moved

Third-class lever (most common in the human body):
- Force is located between the axis and resistance
- Force (muscle insertion) is close to axis (joint)
- Resistance (body part/object) is furthest from axis
- Built to amplify speed and range of motion
- Example: biceps curl — axis = elbow joint, force = biceps insertion on radius, resistance = lower arm + weight

Levers and equipment:
- Longer levers increase range of motion and speed
- Sports equipment (racquets, sticks, bats) increases lever length
- Hockey stick example: axis = shoulder, force = deltoid moving arm/stick, resistance = ball
- This is known as mechanical disadvantage (trades force for speed/distance)

Example — kicking action:
- Quadriceps (force) contract, pulling on tibia
- Knee joint = axis
- Knee extension occurs
- Foot (resistance) moves to kick ball
      `
    }
  ]
};
