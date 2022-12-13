import React from "react";
import { Breadcrumb } from "react-bootstrap";
import Link from "next/link";

import { reportTypes } from "../util/stats-util";

const URL = "/t/{tournamentId}/{slug}/{page}?phase={phaseId}";

const LINKS = [
  { display: "Standings", link: reportTypes.teamStandings },
  { display: "Individuals", link: reportTypes.individual },
  { display: "Team Full", link: reportTypes.teamFull },
  { display: "Individual Full", link: reportTypes.individualFull },
  { display: "Round Report", link: reportTypes.roundReport },
];

const StandingsNavigation = ({ tournamentId, phaseId, slug, reportType }) => {
  const createLink = (link) => {
    let formattedUrl = URL.replace("{tournamentId}", tournamentId)
      .replace("{page}", link.link)
      .replace("{slug}", slug);
    if (phaseId) {
      formattedUrl = formattedUrl.replace("{phaseId}", phaseId);
    } else {
      formattedUrl = formattedUrl.replace("?phase={phaseId}", "");
    }
    const isMatch = reportType === link.link;
    if (isMatch) {
      return (
        <Breadcrumb.Item key={link.link} active>
          {" "}
          {link.display}{" "}
        </Breadcrumb.Item>
      );
    }
    return (
      <Link key={link.link} href={formattedUrl} passHref>
        <Breadcrumb.Item>{link.display}</Breadcrumb.Item>
      </Link>
    );
  };

  return (
    <Breadcrumb className="StandingsNavigation">
      {LINKS.map((link) => createLink(link))}
    </Breadcrumb>
  );
};

export default StandingsNavigation;
