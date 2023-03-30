import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './MarkdownNotes.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const MarkdownNotes: FC<Props> = memo(function MarkdownNotes(props = {}) {
  return <div className={`${resets.storybrainResets} ${classes.root}`}></div>;
});
