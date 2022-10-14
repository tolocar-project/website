import type {
  AcademyPageParent,
  AcademyPageFrontmatter,
} from "@interfaces/IAcademy";
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
  console.log("Raw Content", JSON.stringify(rawAcademyContent, null, 2));
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
      if (possibleLesson.url.toLowerCase().startsWith(course.url)) {
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
