"use client";
import { useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Resource, resources, Tag } from "@/data/reading-list";
import { Button } from "@/components/ui/button";

export default function ReadingListTable() {
  const [books, setBooks] = useState<Resource[]>(resources);
  const [filterTag, setFilterTag] = useState<Tag | null>(null);

  function handleTagClick(tag: Tag) {
    if (filterTag === tag) {
      setFilterTag(null);
      setBooks(resources);
    } else {
      setFilterTag(tag);
      const filteredBooks = resources.filter((book) => book.tags.includes(tag));
      setBooks(filteredBooks);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-2">
        <Button
          className="text-xs font-semibold"
          key={"all"}
          size="sm"
          onClick={() => handleTagClick(filterTag!)}
          variant={filterTag === null ? "default" : "secondary"}
        >
          All
        </Button>
        {Object.values(Tag).map((tag) => (
          <Button
            className="text-xs font-semibold"
            key={tag}
            size="sm"
            onClick={() => handleTagClick(tag)}
            variant={filterTag === tag ? "default" : "secondary"}
          >
            {tag}
          </Button>
        ))}
      </div>

      <Table>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.title}>
              <TableCell className="text-xs font-bold text-neutral-100">
                <div className="flex flex-col gap-1 whitespace-normal min-w-[250px]">
                  <span>{book.title}</span>
                  <span className="text-neutral-400 text-[10px] font-light">
                    {book.author}
                  </span>
                </div>
              </TableCell>

              <TableCell className="text-xs whitespace-normal font-light text-neutral-400 min-w-[150px]">
                {book.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
