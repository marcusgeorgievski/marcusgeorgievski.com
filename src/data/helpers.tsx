import { Code } from "@/components/core/typography";

export function experienceHtmlBullets(company: string) {
  switch (company) {
    case "KORE / HTS":
      return (
        <ul className="space-y-1">
          <li className="ml-[53px] sm:ml-[56px] text-slate-300 list-disc">
            Developing a secure internal shareholder portal using{" "}
            <Code bg>Angular</Code> and <Code bg>.NET</Code> with{" "}
            <Code bg>Azure</Code>, helping 1500+ employees easily manage their
            shares.
          </li>
        </ul>
      );

    default:
      return null;
  }
}
