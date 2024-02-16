import { type ChordSection } from './ChordSection';

export interface Paragraph {
  verses: string[];
  chords?: ChordSection[];
}
