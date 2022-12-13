import React, { useEffect, useState } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import { useRouter } from "next/router";

import { useAppDispatch } from "./../hooks/hooks";
import { newPhaseSelected } from "./../modules/tournamentStatsWrapper/actions";
import LoadingStatsIndicator from "./LoadingStatsIndicator";

const PhaseSelector = ({
  selectedPhaseId,
  tournamentId,
  loadingStatuses,
  phases,
  statType,
  slug,
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  const pushRoute = (phaseId) => {
    const url = {
      pathname: `/t/${tournamentId}/${slug}/${statType}`,
      query: phaseId ? { phase: phaseId } : null,
    };
    router.push(url, undefined, { shallow: true });
  };

  const onChange = (e) => {
    const phaseId = e.target.value;
    dispatch(newPhaseSelected({ tournamentId, phaseId, statType }));
    pushRoute(phaseId);
  };
  const isLoading =
    loading || loadingStatuses.some((status) => status === true);
  return (
    <Row className="PhaseSelector">
      <Col lg={4} md={6} sm={6}>
        <div>
          <FormGroup>
            <ControlLabel>Select a Phase</ControlLabel>
            <InputGroup>
              <FormControl
                value={selectedPhaseId || ""}
                componentClass="select"
                placeholder="select"
                onChange={(e) => onChange(e)}
              >
                <option value="">All Phases</option>
                {phases.map((phase) => (
                  <option key={phase.id} value={phase.id}>
                    {" "}
                    {phase.name}{" "}
                  </option>
                ))}
              </FormControl>
              <InputGroup.Addon className="LoadingCircleWrapper">
                <LoadingStatsIndicator loading={isLoading} />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </div>
      </Col>
    </Row>
  );
};

export default PhaseSelector;
