import React from "react";
import Section from "../../../../components/Section";
import Grid from "../../../../components/Grid";
import sGrid from "../../../../components/Grid/Grid.module.scss";
import Card from "../../../../components/Card";
import CardOverlayToggle from "../../../../components/CardOverlayToggle";
import { uniqueId } from "../../../../helpers/uniqueId";
import DropdownMenu from "./components/DropdownMenu";
import Dropdown from "./components/Dropdown";
import s from "./Design.module.scss";

class Design extends React.Component {
  constructor() {
    super();

    this.title = "UI Systems";

    this.description = (
      <p>
        Creating consistent and cohesive user interfaces starts with a design
        system. I work on reusable design components and guidelines, which saves
        time and resources, and ensures design consistency.
      </p>
    );

    this.labels = [
      "figma",
      "sketch",
      "photoshop",
      "illustrator",
      "zeplin",
      "typography",
      "aesthetics",
      "usability",
      "animations",
      "transitions",
      "interactions",
      "svg",
      "pixel-densities",
    ];

    this.grid = [
      {
        id: "spinner",
        attributes: {
          className: sGrid.areaSingle,
        },
        content: (
          <Card className={s.cardSpinner}>
            <div className={s.cardSpinnerWrapper}>
              <div className={s.spinner}>
                <div className={s.spinnerCircle1}>
                  <div className={s.spinnerCircleInner1} />
                </div>
                <div className={s.spinnerCircle2}>
                  <div className={s.spinnerCircleInner2} />
                </div>
              </div>
            </div>
            <div className={s.cardSpinnerDesc}>
              Loading animation
              <br />
              with Simpl’s logo
            </div>
          </Card>
        ),
      },
      {
        id: "dropdown-menu",
        attributes: {
          className: sGrid.areaDouble,
          style: { zIndex: 2 },
          "data-fade-delay-media-md": 150,
          "data-fade-delay-media-lg": 150,
        },
        content: (
          <Card className={s.cardDropdownMenu} colSpan={2}>
            <DropdownMenu
              toggle="Dropdown menu"
              items={[
                {
                  value: "Page one",
                  href: "./",
                },
                {
                  value: "Page two",
                  href: "./",
                },
                {
                  value: "Page three",
                  href: "./",
                },
              ]}
            />
          </Card>
        ),
      },
      {
        id: uniqueId(),
        attributes: {
          className: `${sGrid.areaSingle} ${sGrid.areaGtMdOnly}`,
        },
      },
      {
        id: uniqueId(),
        attributes: {
          className: `${sGrid.areaSingle} ${sGrid.areaMdOnly}`,
        },
      },
      {
        id: "Typography",
        attributes: {
          className: sGrid.areaSingle,
          "data-fade-delay-media-lg": 300,
        },
        content: (
          <Card className={s.cardTypography}>
            <div className={s.cardTypographyImage} />
          </Card>
        ),
      },
      {
        id: uniqueId(),
        attributes: {
          className: `${sGrid.areaSingle} ${sGrid.areaGtLgOnly}`,
        },
      },
      {
        id: uniqueId(),
        attributes: {
          className: `${sGrid.areaSingle} ${sGrid.areaGtMdOnly}`,
        },
      },
      {
        id: "checkout",
        attributes: {
          className: sGrid.areaSingle,
          "data-fade-delay-media-s": 150,
          "data-fade-delay-media-md": 150,
          "data-fade-delay-media-lg": 0,
        },
        content: (
          <Card className={s.cardCheckout}>
            <div className={s.cardCheckoutWrapper}>
              <div className={s.cardCheckoutImage} />
            </div>
          </Card>
        ),
      },
      {
        id: "dropdown",
        attributes: {
          className: sGrid.areaDouble,
          style: { zIndex: 1 },
          "data-fade-delay-media-lg": 150,
        },
        content: (
          <Card className={s.cardDropdown} colSpan={2}>
            <Dropdown
              items={[
                {
                  value: "Dropdown item",
                },
                {
                  value: "Ttem two",
                  href: "./",
                },
                {
                  value: "Ttem three",
                  href: "./",
                },
                {
                  value: "Ttem four",
                  href: "./",
                },
              ]}
            />
          </Card>
        ),
      },
      {
        id: uniqueId(),
        attributes: {
          className: sGrid.areaSingle,
        },
      },
      {
        id: "transaction",
        attributes: {
          className: sGrid.areaSingle,
          "data-fade-delay-media-md": 150,
          "data-fade-delay-media-lg": 300,
        },
        content: (
          <Card>
            <CardOverlayToggle
              id="transaction"
              className={s.cardTransactionImage}
            />
          </Card>
        ),
      },
    ];
  }

  render() {
    return (
      <Section
        title={this.title}
        description={this.description}
        labels={this.labels}
      >
        <Grid grid={this.grid} />
      </Section>
    );
  }
}

export default Design;
