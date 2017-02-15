import React from 'react';
import Section from 'components/Section';
import Grid from 'components/Grid';
import Card from 'components/Card';
import IconForward from 'components/Icons/Forward';
import DropdownMenu from './components/DropdownMenu';
import Dropdown from './components/Dropdown';
import s from './Design.css';
import sGrid from 'components/Grid/Grid.css';

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
      attributes: {
        className: sGrid.areaSingle,
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
      attributes: {
        className: sGrid.areaDouble,
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
      attributes: {
        className: sGrid.areaSingle
      }
    },
    {
      id: 'Typography',
      attributes: {
        className: sGrid.areaSingle,
        'data-fade-delay-desktop': 300
      },
      content: (
        <Card className={s.cardTypography}>
          <div className={s.cardTypographyImage} />
        </Card>
      )
    },
    {
      id: 'space2',
      attributes: {
        className: `${sGrid.areaSingle} ${sGrid.areaGtMdOnly}`
      }
    },
    {
      id: 'space3',
      attributes: {
        className: `${sGrid.areaSingle} ${sGrid.areaGtMdOnly}`
      }
    },
    {
      id: 'checkout',
      attributes: {
        className: sGrid.areaSingle,
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
      id: 'dropdown',
      attributes: {
        className: sGrid.areaDouble,
        style: { zIndex: 1 },
        'data-fade-delay-desktop': 150
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
      id: 'space4',
      attributes: {
        className: sGrid.areaSingle
      }
    },
    {
      id: 'transaction',
      attributes: {
        className: sGrid.areaSingle,
        'data-fade-delay-desktop': 300
      },
      content: (
        <Card className={s.cardTransaction}>
          <a className={`${s.cardTransactionImage} js-overlay-toggle`} data-overlay-id="transaction">
            <div className={s.cardTransactionMask}>
              <div className={s.cardTransactionAction}>
                <IconForward attributes={{ className: s.cardTransactionIcon }} />
              </div>
            </div>
          </a>
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
