"use client";
import { useState } from "react";
import MarkdownViewer from './MarkdownViewer';

export default function Home() {
    const [file, setFile] = useState("hi");
    const [markdownContent, setMarkdownContent] = useState(`
  # Lecture Notes: Poetic Realism, French Cinema, and the New Wave

## Poetic Realism
- **Definition**: A cinematic movement that emerged as a form of realism, characterized by a blend of romantic and anti-romantic narratives, often focusing on working-class life.
- **Filmmakers**: Directors like Marcel Pagnol and Alexander Korda led the early examples.
- **Example**: *Marius* (by Marcel Pagnol and Alexander Korda)
  - Story of a young man in a French port city who dreams of going to sea.
  - Balances romantic and anti-romantic elements.
  - Part of a trilogy where the protagonist returns, finding that his girlfriend has married someone else.
  - **Style**: Shot in studios rather than on location, allowing control over lighting and set design to reflect the mood of characters.

## Jean Vigo and Atmosphere in French Cinema
- **L'Atalante** (by Jean Vigo)
  - Story about a couple living on a barge in France, with a focus on the husband's brief affair.
  - Renowned for its lyrical images and atmospheric storytelling, rather than its plot.
  
## Jean Renoir: A Key Figure in 1930s French Cinema
- **Background**: Son of August Renoir, the famous Impressionist painter.
- **Approach**: Known for blending atmospheric visuals with political and realistic storytelling.
- **Notable Works**:
  - *La Grande Illusion*:
    - Set during WWI; follows French soldiers captured by Germans.
    - Explores philosophical themes on war and the futility of conflict.
    - Stars Erich von Stroheim as the German commandant.
  - *Rules of the Game*:
    - A commentary on class differences through a story set in a French country estate.
    - Emphasized by director Alain Resnais as a groundbreaking film.

## Influence of the French New Wave on Renoir's Legacy
- The New Wave directors regarded Renoir as a significant influence.
- He faced exile during WWII due to political views but continued filmmaking in the US.
- Post-war, he gained renewed recognition, thanks to the New Wave's admiration for his work.

## German-Jewish Influence in French Cinema
- Many German-Jewish filmmakers fled to France after 1933.
- This migration led to new film companies and key contributions to Poetic Realism.
- **Examples**:
  - *Pépé le Moko*: Story of a thief in Algiers; produced by German-Jewish filmmakers.
  - *Port of Shadows*: A film filled with dark fatalism, starring Jean Gabin as a deserter hiding in a port city.

## WWII and French Cinema Under Occupation
- **Impact**: France was occupied by Germany in 1940, leading to strict control over the film industry.
- **Le Corbeau** (by Henri-Georges Clouzot):
  - Story of libelous letters in a French town, escalating to mob violence.
  - Considered a precursor to film noir.
  - Initially banned for its controversial content, it was rediscovered in the 1970s.
  - Symbolized the repression of discussions on French collaboration during the war.

## French Cinema's Shift Post-War
- **Children of Paradise**:
  - Celebrates theater and explores a love triangle.
  - Known for using production as a cover for French resistance meetings during the occupation.
- **1950s**: Dominated by established directors producing "cinema of quality"—well-crafted but conventional narratives.

## The French New Wave (La Nouvelle Vague)
- **Origins**: A reaction against the "cinema of quality" and a celebration of American genre cinema.
- **Key Figures**: Jean-Luc Godard, François Truffaut, Claude Chabrol, Alain Resnais, Jacques Demy, Agnes Varda.
- **Stylistic Innovations**: 
  - Distancing devices, jump cuts, breaking the 180-degree rule, and non-linear storytelling.
  - Characters addressing the audience, making viewers aware of the cinematic experience.
  
### Jean-Luc Godard
- **Breathless (1959)**:
  - Homage to American gangster films.
  - Noted for its use of jump cuts and meta-cinematic techniques.
- **Pierrot le Fou**:
  - Uses color to convey aesthetic points and features jump cuts that disrupt continuity.
  - Emphasizes intellectual engagement with the narrative.

### François Truffaut
- **The Auteur Theory**: A concept that directors with a consistent style and thematic focus can be considered true artists.
- **Notable Films**:
  - *The 400 Blows*: An autobiographical film about a troubled youth.
  - *Jules and Jim*: A love triangle set during WWII.
  - *Day for Night*: A tribute to Hollywood filmmaking and the creative process.

### Jacques Demy
- Known for his love of American musicals.
- **Notable Works**:
  - *Lola*: A semi-musical about a fleeting romance.
  - *The Umbrellas of Cherbourg*: A fully sung musical with vibrant colors.
  - *The Young Girls of Rochefort*: Stars Catherine Deneuve and celebrates the musical genre.

### Agnes Varda
- Considered one of the most important directors of the New Wave.
- **Le Pointe Courte** (1955): A meditation on a troubled marriage, predating the New Wave.
- **Cleo from 5 to 7**: A key film in Varda's career and a landmark of French cinema.

## Legacy of French Cinema
- **Influence on Hollywood**: French Poetic Realism's emphasis on atmosphere and visual storytelling influenced the development of film noir in the United States.
- **Reassessment of History**: French cinema post-WWII grappled with the legacy of collaboration and resistance, influencing both the content and reception of its films.
- **New Wave's Impact**: The French New Wave reshaped global cinema with its stylistic experimentation and intellectual approach, leaving a lasting impact on filmmaking.
  `);

    function getFile() {
        alert("set file");
    }
    function handleClear() {
        setFile(null);
    }

    function downloadMarkdown() {
        alert("downloaded markdown");
    }

    function generateMarkdown() {
        alert("generated notes");
    }

    return (
        <div className="max-h-screen items-center flex flex-col">
            <h1 className="text-6xl text-center font-semibold padding py-8">
                Yap2Notes
            </h1>
            <div className="flex flex-row space-x-20">
                <div className="flex flex-col space-y-4 ">
                    <form className="flex items-center space-x-6">
                        <label className="block">
                            <span className="sr-only">Choose profile photo</span>
                            <input type="file" className="block w-full text-sm text-slate-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded file:border-0
                          file:text-sm file:font-semibold
                          file:bg-violet-500 file:text-white
                          hover:file:bg-violet-700
                        "/>
                        </label>
                    </form>
                    {file && <button
                        onClick={handleClear}
                        className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                        Clear
                    </button>}
                    <button
                        onClick={generateMarkdown}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Generate Notes
                    </button>
                    {markdownContent && <button
                        onClick={downloadMarkdown}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                        <span>Download</span>
                    </button>}
                </div>
                <div className="overflow-y-scroll h-screen">
                    <MarkdownViewer content={markdownContent}></MarkdownViewer>
                </div>
            </div>
        </div>
  );
}
