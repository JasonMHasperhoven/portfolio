import React from 'react';
import Section from 'components/Section';
import Grid from 'components/Grid';
import Card from 'components/Card';
import DropdownMenu from './components/DropdownMenu';
import Dropdown from './components/Dropdown';
import s from './Design.css';

const Design = () => {
  const title = 'Design';

  const description = (
    <p>
      Creating user interfaces starts with the design process.
      I work on creating aesthetic appearances, strong typographic hierarchies,
      logical layouts and pleasing interactions. I work closely with designers to
      make sure we focus on maximising usability and user experience.
    </p>
  );

  const labels = [
    'sketch',
    'photoshop',
    'illustrator',
    'zeplin',
    'typography',
    'aesthetics',
    'usability',
    'animations',
    'transitions',
    'interactions',
    'svg',
    'pixel-densities'
  ];

  const grid = [
    {
      id: 'spinner',
      colSpan: 1,
      attributes: {
        'data-fade-delay-desktop': 0
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
            Loading animation<br />
            with Simpl’s logo
          </div>
        </Card>
      )
    },
    {
      id: 'dropdown-menu',
      colSpan: 2,
      attributes: {
        style: { zIndex: 2 },
        'data-fade-delay-desktop': 150
      },
      content: (
        <Card className={s.cardDropdownMenu} colSpan={2}>
          <DropdownMenu toggle="Dropdown menu" items={[
            {
              value: 'Page one',
              href: './'
            },
            {
              value: 'Page two',
              href: './'
            },
            {
              value: 'Page three',
              href: './'
            }
          ]}/>
        </Card>
      )
    },
    {
      id: 'space1',
      colSpan: 1
    },
    {
      id: 'dropdown',
      colSpan: 2,
      attributes: {
        style: { zIndex: 1 },
        'data-fade-delay-desktop': 300
      },
      content: (
        <Card className={s.cardDropdown} colSpan={2}>
          <Dropdown items={[
            {
              value: 'Dropdown item'
            },
            {
              value: 'Ttem two',
              href: './'
            },
            {
              value: 'Ttem three',
              href: './'
            },
            {
              value: 'Ttem four',
              href: './'
            }
          ]} />
        </Card>
      )
    },
    {
      id: 'space2',
      colSpan: 1
    },
    {
      id: 'checkout',
      colSpan: 1,
      attributes: {
        'data-fade-delay-desktop': 0
      },
      content: (
        <Card className={s.cardCheckout}>
          <div className={s.cardCheckoutWrapper}>
            <div className={s.cardCheckoutImage} />
          </div>
        </Card>
      )
    },
    {
      id: 'Typography',
      colSpan: 1,
      attributes: {
        'data-fade-delay-desktop': 150
      },
      content: (
        <Card className={s.cardTypography}>
          <div className={s.cardTypographyImage} />
        </Card>
      )
    }
  ];

  return (
    <div className={s.design}>
      <Section
        title={title}
        description={description}
        labels={labels}>
        <Grid grid={grid} />
      </Section>
    </div>
  );
};

export default Design;
