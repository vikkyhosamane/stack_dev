import TagCard from "@/components/cards/TagCard";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

const hotQuestions = [
  { _id: 1, title: "How to implement a custom hook in React?", votes: 120, answers: 15 },
  { _id: 2, title: "What is the difference between useEffect and useLayoutEffect?", votes: 95, answers: 10 },
  { _id: 3, title: "How to optimize React performance with memoization?", votes: 80, answers: 8 },
  { _id: 4, title: "What are the best practices for state management in React?", votes: 70, answers: 12 },
  { _id: 5, title: "How to handle forms in React using Formik?", votes: 60, answers: 5 },
];

const popularTags = [
  { _id: 1, name: "React", questions: 150 },
  { _id: 2, name: "JavaScript", questions: 120 },
  { _id: 3, name: "CSS", questions: 100 },
  { _id: 4, name: "HTML", questions: 90 },
  { _id: 5, name: "Node.js", questions: 80 },
];

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border mx-xl:hidden sticky top-0 right-0 flex h-screen w-87.5 flex-col gap-6 overflow-y-auto p-6 pt-36 max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

        <div className="mt-7 flex w-full flex-col gap-7.5">
          {hotQuestions.map((question) => (
            <Link
              href={ROUTES.PROFILE(question._id)}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{question.title}</p>

              <Image
                src="/icons/arrow-right.svg"
                alt="Arrow Right"
                width={20}
                height={20}
                className="inverted-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard key={_id} name={name} questions={questions} _id={_id} showCount compact />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
