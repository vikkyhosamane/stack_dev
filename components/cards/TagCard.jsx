import ROUTES from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { getTagIcon } from "@/lib/utils";

const TagCard = ({ name, questions, _id, showCount = false, compact = false }) => {
  const tagIcon = getTagIcon(name);

  return (
    <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        <div className="flex-center space-x-2">
          {tagIcon.type === "icon" ? (
            <i className={tagIcon.className} />
          ) : (
            <Image src={tagIcon.src} alt={`${name} tag icon`} width={16} height={16} className="h-4 w-4" />
          )}
          <span>{name}</span>
        </div>
      </Badge>

      {showCount && <p className="small-medium text-dark500_light700">{questions}</p>}
    </Link>
  );
};

export default TagCard;
