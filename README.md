# Toki Pona Translator

This project is part of the *Effective Programming with Effects* course.

## Table of contents

- [Links](#links)
- [Description](#description)
- [Current-Progress](#current-progress)
- [Must-Have](#must-have)
- [Can-Have](#can-have)
- [Will-not-Have](#will-not-have)
- [Effects and Handlers](#effects-and-handlers)
- [FFI and Libraries](#ffi-and-libraries)

## Links
- Uses Effekt Project Template: https://github.com/jiribenes/effekt-template
- Toki Pona is constructed language with a minmal vocabulary created by Sonja Lang: https://tokipona.org/, 
- Toki Pona doesn't have one offical guide to grammar, but the grammar for this translator is based on this guide, using the same naming conventions: https://github.com/kilipan/nasin-toki


## Description
A tool for translating between the constructed language toki pona and english. 
Toki Pona is used by a rather large community on different discord servers and forums, but there doesn't yet exist a good translator, making the project potentially usefull for people trying to learn the language.
The translating will be done by creating syntax trees for the toki pona sentence, which is fairly simple in toki pona since there aren't a lot of different sentence constructions, then translating every word individually, which is also fairly simply because of the limited vocabulary, and then constructing an english sentence using the syntax tree and translated words.


## User Documentation
- Clone this Repository locally and open it in VSCode
- Install the Effekt VSCode extension offered in the pop-up in the bottom right


## Developer Documentation
- See 


## Current Progress
- Can detect most toki pona sentences, with the exceptions of some more complicated constructions:
    - Particle la
    - Particle anu
    - Questions
    - Using prepositions as verbs
- Examples for sentences that can currently be translated are in test.effekt
- Future Plans
    - Maybe articles (the, add to Syntax Tree)
    - Loan Words
    - Fix all TODOs
    - Fix Negation
    - Try different Phrases
    - Write Architecture
    - Write Website


## Plan

#### Must-have

- User can Input any sentence, and if it follows the grammar of toki pona, receive an english translation or multiple if the sentence is ambigous

#### Can-have

- Translation of english sentences to toki pona, with a limited vocabulary and grammatic constructions
- Spell checking for toki pona words, to detect what the user might say
- A gui and/or web-interface to make it available to other people 

#### Will-not-have

- Full translation between english and toki pona, since english grammar is to complex to be translated using simple algorithms or to be expressed in toki pona

#### Effects and handlers

- Since toki pona is based on words having a broad meaning, ambiguities could be handled with a handler that uses multiple continues
- Misspelled words could be implemented as an effect, which has a handler that asks the user for clarification or corrects the word if it's close to a known one
- Missing words in syntax trees could also be implemented as an effect, whith a handler that determines how the programm should continue


#### FFI and libraries

- For the syntax trees a tree like structure to store the data would be helpful. I don't think one exists in the standard library, but writing one should be fairly easy
- The translating itself doesn't need any other FFI/libraries, only if I get to the point making a gui or web-interface this might be important, but there should be enought options that one works well.
