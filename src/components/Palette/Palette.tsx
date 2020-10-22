import React from 'react';
import { curry } from 'rambda';

import styles from './Palette.module.scss';

const COLOR_WEIGHTS = [900, 800, 700, 600, 500, 400, 300, 200, 100];
const MISSING_ACCENT_WEIGHTS = [800, 600, 400];

const byValues = curry(
  (excludedValues: number[], value: number) => !excludedValues.includes(value)
);
const paletteGenerator = curry(
  (values: number[], excludedValues: number[], stylePrefix: string) =>
    values
      .filter(byValues(excludedValues))
      .map((value) => (
        <div
          className={[styles.box, styles[`${stylePrefix}-${value}`]].join(' ')}
          key={value}
        />
      ))
);
const generatePrimaryColors = paletteGenerator(COLOR_WEIGHTS, []);
const generateAccentColors = paletteGenerator(
  COLOR_WEIGHTS,
  MISSING_ACCENT_WEIGHTS
);

export default function Palette() {
  return (
    <>
      <div className={styles.palette}>{generatePrimaryColors('-grey')}</div>
      <div className={styles.palette}>{generatePrimaryColors('-primary')}</div>
      <div className={styles.palette}>
        {generateAccentColors('-accent-red')}
      </div>
      <div className={styles.palette}>
        {generateAccentColors('-accent-green')}
      </div>
      <div className={styles.palette}>
        {generateAccentColors('-accent-yellow')}
      </div>
    </>
  );
}
