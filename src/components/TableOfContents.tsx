import type { MarkdownHeading } from 'astro';

interface Props {
  title: string;
  headlines: Array<MarkdownHeading>;
}


const buildTocList = (input: Array<MarkdownHeading>) => {
  // Create a ordered list of depth and remove duplicates
  let map = new Map(
    [...new Set(input.map((listItem) => listItem.depth))]
      .sort((a, b) => a - b)
      .map((depth, i) => [depth, i + 1])
  );
  const output = [...input];
  for (let o of output) o.depth = map.get(o.depth);
  return output;
};

const paddingMapping = {
  1: "pl-0",
  2: "pl-4",
  3: "pl-8",
  4: "pl-12",
  5: "pl-16",
  6: "pl-20",
};

const TableOfContents: React.FC<Props> = ({ title, headlines }) => {
  const headlinesWithoutDepthGaps = buildTocList(headlines);
  return (
    <nav>
      <div className={"text-lg font-bold text-neutral-800"}>{title}</div>
      <ul className="text-neutral-500 text-lg font-medium flex flex-col gap-4 mt-4 pl-10 pl-">
        {headlinesWithoutDepthGaps.map((headline) => {
          const leftPadding = paddingMapping[headline.depth];
          return (
            <li className={leftPadding}>
              <a className="hover:text-neutral-900" href={`#${headline.slug}`}>{headline.text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TableOfContents;
