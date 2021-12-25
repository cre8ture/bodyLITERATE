import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Header from "../components/header";

function Ef() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <div className="App">
        <h1> Executive Functions Coaching </h1>
        <h2> Executive functioning ADHD coaching/consultations </h2>
        <br></br>
        <article>
          We tailor our process to each unique student. Our aim is to make
          learning these skills relevant, joyful and holistic. We do this by
          working with students on their areas of challenge. This might include
          academic work, morning routines or a job. We model better systems with
          them and identify the structures that work well. We progress step by
          step, building up these skills. Alongside tackling their challenges,
          we introduce the student to mindfulness and somatic practices. At the
          heart of our teaching is our incredible teaching team. Our coaches
          have advanced degrees and years of experience. They are kind and
          passionate. executive functions refer to processes that bring thinking
          into action. We help students plan tasks, organize information, manage
          time and communicate their needs. We specialize in executive
          functioning coaching. Please read this article for more information We
          work with neurodiverse populations. Some have ADHD or sensory
          processing disorder. We also work with students with dyscalculia,
          processing/memory difficulties, dyslexia and more. We celebrate
          differences and we augment our work to meet every student's access
          needs. We partner with parents by helping families build better
          systems at home. This might include homework incentive systems, time
          management structures, and goal setting. We often work with families
          in conflict with the education system. We help them navigate the best
          foot forward. Sometimes it's getting a neuropsych. Other times it's
          about finding support such as a therapist. Many families need guidance
          communicating with the school's administration. Engagement refers to a
          student’s level of interest and agency in his/her learning. We help
          students find their interests and engage with their learning
          environment. Students learn to advocate for themselves. They apply
          their unique interests into their assignments. They learn to
          self-motivate as they feel embodied in their learning.
        </article>
      </div>
    </ChakraProvider>
  );
}

export default Ef;
