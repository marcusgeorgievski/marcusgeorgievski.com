"use client";
import { useState, useMemo, useCallback } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Resource, resources, Tag } from "@/data/reading-list";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

export default function ReadingListTable() {
  const searchParams = useSearchParams();
  const tagParam = searchParams.get("tag");

  const tag: Tag | null = useMemo(
    () =>
      Object.values(Tag).find(
        (tag) => tag.toLowerCase() === tagParam?.toLowerCase()
      ) ?? null,
    [tagParam]
  );

  const [filterTag, setFilterTag] = useState<Tag | null>(tag);

  const filteredBooks: Resource[] = useMemo(() => {
    if (!filterTag) return resources;
    return resources.filter((book) => book.tags.includes(filterTag));
  }, [filterTag]);

  const handleTagClick = useCallback((tag: Tag | null) => {
    window.history.replaceState({}, document.title, window.location.pathname);
    setFilterTag(tag);
  }, []);

  const handleAllClick = useCallback(() => {
    handleTagClick(null);
  }, [handleTagClick]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-2">
        <Button
          className="text-xs font-semibold"
          size="sm"
          onClick={handleAllClick}
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
          {filteredBooks.map((book) => (
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
