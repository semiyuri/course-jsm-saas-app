import React from "react";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "./ui/table";
import { cn, getSubjectColor } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionsList = ({ title, companions, classNames }: Props) => {
  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="font-bold text-3xl">{title}</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {companions?.map((companion) => (
            <TableRow key={companion.id}>
              <TableCell className="font-medium p-3">
                <Link href={`/companions/${companion.id}`}>
                  <div className="flex items-center gap-4">
                    <div
                      className="size-[60px] flex items-center justify-center rounded-lg max-md:hidden"
                      style={{
                        backgroundColor: getSubjectColor(companion.subject),
                      }}
                    >
                      <Image
                        src={`/icons/subjects/${companion.subject}.svg`}
                        alt={companion.subject}
                        width={24}
                        height={24}
                      />
                    </div>

                    <div className="flex flex-col max-md:gap-1">
                      <p className="font-bold text-2xl">{companion.name}</p>

                      <p className="text-lg leading-none text-gray-600">
                        {companion.topic}
                      </p>
                    </div>
                  </div>
                </Link>
              </TableCell>

              <TableCell>
                <div className="subject-badge w-fit max-md:hidden">
                  {companion.subject}
                </div>

                <div
                  className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                  style={{
                    backgroundColor: getSubjectColor(companion.subject),
                  }}
                >
                  <Image
                    src={`/icons/subjects/${companion.subject}.svg`}
                    alt={companion.subject}
                    width={18}
                    height={18}
                  />
                </div>
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-2 w-full justify-end">
                  <p className="text-xl">
                    {companion.duration}{" "}
                    <span className="text-xl max-md:hidden">mins</span>
                  </p>

                  <Image
                    src="/icons/clock.svg"
                    alt="minutes"
                    width={14}
                    height={14}
                    className="md:hidden"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionsList;
