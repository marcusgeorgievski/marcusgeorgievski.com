import { Code } from "@/components/core/typography";

export function experienceHtmlBullets(company: string) {
  switch (company) {
    case "KORE / HTS":
      return (
        <ul className="space-y-1 ml-[53px] sm:ml-[56px] text-slate-400 list-disc">
          <li>
            Developing a secure shareholder portal for 1500+ employees using{" "}
            <Code bg>Angular</Code> and <Code bg>.NET</Code> with{" "}
            <Code bg>Azure</Code>
          </li>
          <li>
            Driving MVP delivery while ensuring robust security and
            pixel-perfect UI/UX
          </li>
        </ul>
      );

    default:
      return null;
  }
}
