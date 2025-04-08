export type JobAdvert = {
  advert_id: string;
  companyName: string;
  positionName: string;
  deadline: string;
  priority: string;
  hyperlink: string;
  advertisementSite: string;
  appliedFor: boolean;
};

export function getJobs(): JobAdvert[] {
  return [
    {
      advert_id: "0",
      companyName: "Variant",
      positionName: "Webutvikler",
      priority: "Høy",
      deadline: "4. mars",
      hyperlink: "https://jobs.variant.no/o/utvikler-i-oslo",
      advertisementSite: "Variant",
      appliedFor: false,
    },
    {
      advert_id: "1",
      companyName: "Bekk",
      positionName: "Frontend utvikler",
      priority: "Medium",
      deadline: "4. mars",
      hyperlink: "https://jobs.variant.no/o/utvikler-i-oslo",
      advertisementSite: "Finn",
      appliedFor: true,
    },
    {
      advert_id: "2",
      companyName: "Kantega",
      positionName: "UX",
      priority: "Høy",
      deadline: "4. mars",
      hyperlink: "https://jobs.variant.no/o/utvikler-i-oslo",
      advertisementSite: "Finn",
      appliedFor: false,
    },
    {
      advert_id: "3",
      companyName: "NAV",
      positionName: "Backend utvikler",
      priority: "Høy",
      deadline: "4. mars",
      hyperlink: "https://jobs.variant.no/o/utvikler-i-oslo",
      advertisementSite: "Abakus",
      appliedFor: false,
    },
  ];
}
