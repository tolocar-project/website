import type {
  AcademyPageParent,
  AcademyPageFrontmatter,
} from "@interfaces/IAcademy";
import type { ITolocarsFrontmatter } from "@interfaces/ITolocars";
import type { MDXInstance } from "astro";

export function flatAcademyContentMap(
  rawAcademyContent: MDXInstance<AcademyPageFrontmatter>[]
) {
  const flatMap: Record<string, MDXInstance<AcademyPageFrontmatter>> = {};
  rawAcademyContent.forEach((page) => {
    flatMap[page.url] = page;
  });
  return flatMap;
}

export function getParentPage(
  rawAcademyContent: MDXInstance<AcademyPageFrontmatter>[],
  childPage: string
) {
  const nestedAcademyContent = transformAcademy(rawAcademyContent);
  return Object.values(nestedAcademyContent).find((page) =>
    page.children.some((child) => child.url === childPage)
  );
}

export function transformAcademy(rawAcademyContent) {
  const courses = rawAcademyContent
    .filter((item) => item.file.toLowerCase().includes("index.mdx"))
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);

  // This is the "rest"/opposite of the filter result above
  const possibleLessons = rawAcademyContent.filter(
    (item) => !item.file.toLowerCase().includes("index.mdx")
  );

  const coursesAndLessons: Record<string, AcademyPageParent> = {};

  courses.forEach((course) => {
    coursesAndLessons[course.url] = {
      ...course,
      children: [],
    };

    possibleLessons.forEach((possibleLesson) => {
      if (possibleLesson.url.startsWith(course.url)) {
        if (coursesAndLessons[course.url]) {
          coursesAndLessons[course.url] = {
            ...coursesAndLessons[course.url],
            children: [
              ...coursesAndLessons[course.url].children,
              { ...possibleLesson, category: course.frontmatter.title },
            ],
          };
        }
      }
    });

    coursesAndLessons[course.url] = {
      ...coursesAndLessons[course.url],
      children: coursesAndLessons[course.url].children.sort(
        (a, b) => a.frontmatter.order - b.frontmatter.order
      ),
    };
  });

  return coursesAndLessons;
}

export function trimAndSortTolocars(
  rawTolocarsContent: MDXInstance<ITolocarsFrontmatter>[],
  count?: number
) {
  const rawSortedTolocarsContentWithoutIndex = rawTolocarsContent
    .filter((tolocar) => !tolocar.file.includes("index.mdx"))
    .sort((a, b) => b.frontmatter.order - a.frontmatter.order);

  const trimmedTolocars = count
    ? rawSortedTolocarsContentWithoutIndex.slice(0, count)
    : rawSortedTolocarsContentWithoutIndex;

  return trimmedTolocars;
}
