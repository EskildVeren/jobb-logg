export type Job = {
  id: string;
  companyName: string;
  positionName: string;
  deadline: string;
  priority: string;
  hyperlink: string;
  advertSite: string;
  appliedFor: boolean;
};

export function getJobs(): Job[] {
  return [
    {
      id: "0",
      companyName: "Variant",
      positionName: "Webutvikler",
      priority: "Høy",
      deadline: "4. mars",
      hyperlink: "https://jobs.variant.no/o/utvikler-i-oslo",
      advertSite: "Variant",
      appliedFor: false,
    },
    {
      id: "1",
      companyName: "Bekk",
      positionName: "Frontend utvikler",
      priority: "Medium",
      deadline: "4. mars",
      hyperlink: "https://jobs.variant.no/o/utvikler-i-oslo",
      advertSite: "Finn",
      appliedFor: true,
    },
    {
      id: "2",
      companyName: "Kantega",
      positionName: "UX",
      priority: "Høy",
      deadline: "4. mars",
      hyperlink: "https://jobs.variant.no/o/utvikler-i-oslo",
      advertSite: "Finn",
      appliedFor: false,
    },
    {
      id: "3",
      companyName: "NAV",
      positionName: "Backend utvikler",
      priority: "Høy",
      deadline: "4. mars",
      hyperlink: "https://jobs.variant.no/o/utvikler-i-oslo",
      advertSite: "Abakus",
      appliedFor: false,
    },
  ];
}
