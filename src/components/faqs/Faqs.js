import FaqsList from "./faqs-list/FaqsList";

const Faqs = () => {
  const faqsAll = [
    {
      id: "One",
      qus: "What is a mass gainer?",
      ans: "A mass gainer is a dietary supplement designed to help individuals gain weight, particularly in the form of lean muscle mass. It typically contains a blend of proteins, carbohydrates, healthy fats, and other essential nutrients to provide the body with the extra calories needed to support muscle growth and recovery.",
    },
    {
      id: "Two",
      qus: "How does a mass gainer work?",
      ans: "Mass gainers work by providing a calorie surplus to support muscle growth. The proteins in a mass gainer supply the amino acids necessary for muscle repair and growth, while carbohydrates and healthy fats provide the energy required for intense workouts and recovery.",
    },
    {
      id: "Three",
      qus: "Who should use a mass gainer?",
      ans: "Mass gainers are primarily used by individuals who struggle to gain weight, have a fast metabolism, or find it challenging to consume enough calories through regular food alone.",
    },
    {
      id: "Four",
      qus: "Will a mass gainer make me gain fat?",
      ans: "When used properly, mass gainers can help individuals gain lean muscle mass. It&apos;s important to follow the recommended serving sizes and incorporate a well-rounded fitness and nutrition plan.",
    },
    {
      id: "Five",
      qus: "Can women use mass gainers?",
      ans: "Yes, women can use mass gainers if their goal is to gain weight and build muscle.",
    },
    {
      id: "Six",
      qus: "Are mass gainers safe?",
      ans: "Ayurvedic formulations are mostly safe as they are free of harmful chemicals. Use it as directed",
    },
    {
      id: "Seven",
      qus: "How long does it take to see results with a mass gainer?",
      ans: "Though the course is of 45 days, the time it takes to see results can vary depending on various factors, including individual body composition, training intensity, and overall nutrition.",
    },
  ];
  return (
    <div className="faqs">
      <div className="container">
        <h2 className="text-center" data-aos="fade-up">
          Frequently Asked Questions
        </h2>

        <div className="accordion" id="accordionExample" data-aos="fade-up">
          {faqsAll.map((faq) => (
            <FaqsList
              key={Math.random() * 10}
              id={faq.id}
              qus={faq.qus}
              ans={faq.ans}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
