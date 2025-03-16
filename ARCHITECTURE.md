# Architecture

## General Overview

(Image)

The translator works by splitting up the toki pona sentence into a syntax tree, then translating the words into english, using it's parent nodes as context, and then forming an english sentence from the translated syntax tree.
Crucially it doesn't just produce one sentence, but rather uses effekts resume every time a sentence is ambigous, continuing the programm for every possibility and collecting them in a list.


## Code Map

### 'constructSyntaxTree.effekt'
Splits toki pona sentences into a Syntax Tree

### 'convertSyntaxTree.effekt'
Goes through the syntax tree, gives translateWords.effekt the individual words as well as the necessary context to translate them, and puts the translation back into the syntax tree

### 'translateWords.effekt'
Gets the individualWords with context and gives back the translations.
It also uses effects with handlers in convertSyntaxTree.effekt to give additional context for future words that get translated and the ambiguity effect with it's handler in main.effekt 

### 'deconstructSyntaxTree.effekt'
Takes a syntax tree with already translated words and turns it into an english sentence

### 'main.effekt"
Calls functions in all the other files, to translate sentences directly and is also where the ambiguity effect is handled, with all possible sentences being collected into a list.


## Other Concerns

### ambiguity effect
ambiguity is a effect defined in effects.effekt, that takes multiple inputs, and gives out each individually as an output, using multiple resume statements. It's mostly used in translateWords.effekt to represent plural and singular forms of words, as well as toki pona words with multiple english translations.

### Syntax Tree
Syntax Tree is a type defined in syntaxTree.effekt, that follows the general convention of tree data types. They mostly follow the logic of Toki Pona Sentences, but there are also some types that only get used in the translation process to represent english grammar

### Tests
To See what kind of sentences can currently be translated, look at test.effekt

### Updating Code
- The web UI needs a compiled Java Script file, so to update it it's necessary to compile main.effekt with 'effekt --build src/main.effekt' and copy the resulting files from './out' to './webUI'