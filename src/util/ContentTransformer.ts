import type {
  AcademyPageParent,
  AcademyPageFrontmatter,
} from "@interfaces/IAcademy";
import type { MDXInstance } from "astro";
import type {
  IInterventionFrontmatter,
  IInterventionPoi,
} from "@interfaces/IIntervention";

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
      children: coursesAndLessons[course.url].children?.sort(
        (a, b) => (a.frontmatter.order || 0) - (b.frontmatter.order || 0)
      ),
    };
  });

  return coursesAndLessons;
}

export function trimAndSortInterventions(
  rawInterventionsContent: MDXInstance<Partial<IInterventionFrontmatter>>[],
  count?: number
): MDXInstance<Partial<IInterventionFrontmatter>>[] {
  const rawSortedInterventionsContentWithoutIndex = rawInterventionsContent
    .filter((intervention) => !intervention.file.includes("index.mdx"))
    .sort((a, b) => (a.frontmatter.order || 0) - (b.frontmatter.order || 0));

  const trimmedInterventions = count
    ? rawSortedInterventionsContentWithoutIndex.slice(0, count)
    : rawSortedInterventionsContentWithoutIndex;

  return trimmedInterventions.filter(Boolean);
}

export function transformInterventionsToPoiData(
  rawInterventionsContent: MDXInstance<Partial<IInterventionFrontmatter>>[]
) {
  const poiData = rawInterventionsContent
    .map((intervention) => {
      const {
        frontmatter: { locationLngLat, title, date, images, location },
        url,
      } = intervention;

      if (title && date && images && locationLngLat?.length == 2) {
        return {
          locationLngLat,
          title,
          url,
          date,
          image: images?.[0],
          location,
          category: "blog",
        };
      } else {
        return null;
      }
    })
    .filter(Boolean);

  return poiData as IInterventionPoi[];
}
