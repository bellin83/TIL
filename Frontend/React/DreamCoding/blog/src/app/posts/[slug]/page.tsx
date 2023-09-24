import Image from "next/image";
import { AiTwotoneCalendar } from "react-icons/ai";
import MarkdownViewer from "@/components/MarkdownViewer";
import { getPostDate } from "@/service/posts";

interface IProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params: { slug } }: IProps) {
  const { title, description, date, path, content } = await getPostDate(slug);

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center self-end text-green-600">
          <AiTwotoneCalendar />
          <p className="font-semibold ml-2">{date.toString()}</p>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl font-bold">{description}</p>
        <div className="w-44 border-2 border-green-600 mt-4 mb-8" />
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
