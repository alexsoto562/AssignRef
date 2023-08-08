import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTv,
  faBookOpen,
  faUsers,
  faUserCheck,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function AdminDbCard({ data }) {
  const topCards = [
    {
      name: "CONFERENCES",
      icon: faBookOpen,
      number: data?.totalConferences,
      text: "Conferences",
      color: "info",
    },
    {
      name: "GAMES",
      icon: faTv,
      number: data?.totalGames,
      text: "Games",
      color: "success",
    },
    {
      name: "OFFICIALS",
      icon: faUsers,
      number: data?.totalOfficials,
      text: "Officials",
      color: "warning",
    },
    {
      name: "USERS",
      icon: faUserCheck,
      number: data?.totalUsers,
      text: "Users",
      color: "danger",
    },
  ];

  const bottomCards = [
    {
      id: "large-card",
      title: "Earnings",
      actions: ["Action 1", "Action 2"],
      primaryText: "Earnings Primary text",
      secondaryText: "Earnings Sub text",
    },
    {
      id: "small-card",
      title: "Games",
      actions: ["Action 1", "Action 2", "Action 3"],
      primaryText: "Games Primary text",
      secondaryText: "Games Sub text",
    },
  ];

  function mapTopCards(topCards) {
    return topCards.map((topCard) => (
      <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12" key={topCard.name}>
        <div className="mb-3 card border-light">
          <div className="card-body py-3 px-4">
            <a href="/games" className="fs-6 text-uppercase fw-semi-bold">
              {topCard.name}
            </a>
            <div className="mt-2 d-flex justify-content-between align-items-center">
              <div className="lh-1">
                <h2 className="h1 fw-bold mb-1">{topCard.number}</h2>
              </div>
              <div>
                <span
                  className={`bg-light-${topCard.color} icon-shape icon-lg rounded-3 text-dark-${topCard.color}`}
                >
                  <div>
                    <FontAwesomeIcon icon={topCard.icon} size="2xl" />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  function mapBottomCards(bottomCards) {
    return bottomCards.map((card) => (
      <Card key={card.id} id={card.id}>
        <div className="botton-card-align">
          <Card.Title className="card-title-font">{card.title}</Card.Title>
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              <FontAwesomeIcon icon={faEllipsisV} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {card.actions.map((action) => (
                <Dropdown.Item key={action}>{action}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Card.Text>
          <span className="p-bold-size">{card.primaryText}</span>
        </Card.Text>
        <Card.Text>
          <span>{card.secondaryText}</span>
        </Card.Text>
      </Card>
    ));
  }

  return (
    <React.Fragment>
      <div>
        <div className="row dashboard-botton-cards">
          {mapTopCards(topCards)}
        </div>
      </div>

      <div>
        <div className="row dashboard-botton-cards">
          {mapBottomCards(bottomCards)}
        </div>
      </div>
    </React.Fragment>
  );
}

AdminDbCard.propTypes = {
  data: PropTypes.shape({
    totalConferences: PropTypes.number,
    totalGames: PropTypes.number,
    totalOfficials: PropTypes.number,
    totalUsers: PropTypes.number,
  }),
};

export default AdminDbCard;
