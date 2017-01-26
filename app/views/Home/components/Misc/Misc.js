import React from 'react';
import Section from '../Section/Section';
import Grid from '../Grid/Grid';
import s from './Misc.css';

const Misc = () => {
  const title = 'Miscellaneous';

  const description = (
    <p>
      I do creative as well as logical things. As long as we’re creating dreams,
      I’m all in. I have an extensive background in music production, I have experience
      with video editing and know how to handle a DSLR camera as well.
    </p>
  );

  const labels = [
    'cubase',
    'logic pro',
    'softube',
    'fabfilter',
    'u-he',
    'atom',
    'terminal',
    'git',
    'ruby on rails',
    'laravel',
    'final cut pro',
    'adobe after effects'
  ];

  const grid = [
    {
      id: 'photoshop',
      colSpan: 1,
      card: {
        title: 'Photoshop',
        description: 'This is life',
        imageUrl: './asds.png'
      }
    },
    {
      id: 'sketch',
      colSpan: 2,
      attributes: {
        'data-fade-delay-desktop': 150
      },
      card: {
        title: 'Sketch',
        description: 'This is life',
        imageUrl: './asds.png'
      }
    },
    {
      id: 'one',
      colSpan: 1,
      attributes: {
        'data-fade-delay-desktop': 300
      },
      card: {
        title: 'Photoshop',
        description: 'This is life',
        imageUrl: './asds.png'
      }
    },
    {
      colSpan: 1,
      card: false
    },
    {
      id: 'two',
      colSpan: 1,
      attributes: {
        'data-fade-delay-desktop': 450
      },
      card: {
        title: 'Photoshop',
        description: 'This is life',
        imageUrl: './asds.png'
      }
    },
    // row
    {
      colSpan: 1,
      card: false
    },
    {
      id: 'three',
      colSpan: 1,
      card: {
        title: 'somedesign',
        description: 'This is life',
        imageUrl: './asds.png'
      }
    },
    {
      id: 'four',
      colSpan: 1,
      attributes: {
        'data-fade-delay-desktop': 150
      },
      card: {
        title: 'somedesign',
        description: 'This is life',
        imageUrl: './asds.png'
      }
    },
    {
      id: 'five',
      colSpan: 1,
      card: false
    },
    {
      id: 'siz',
      colSpan: 1,
      attributes: {
        'data-fade-delay-desktop': 300
      },
      card: {
        title: 'somedesign',
        description: 'This is life',
        imageUrl: './asds.png'
      }
    },
    {
      id: 'seven',
      colSpan: 1,
      card: false
    }
  ];

  return (
    <div className={s.misc}>
      <Section
        title={title}
        description={description}
        labels={labels}>
        <Grid grid={grid} />
      </Section>
    </div>
  );
};

export default Misc;
