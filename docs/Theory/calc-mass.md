---
sidebar_position: 1
---

# Calculating Mass

Proteoforms are polypeptides that contain many amino acid residues joined together in a long strand.
To calculate the theoretical mass (measured in [Daltons](https://en.wikipedia.org/wiki/Dalton_(unit))) of a proteoform, one must:

## Sum Residue Masses

To begin, one should use a table of masses (reproduced from [here](https://en.wikipedia.org/wiki/Proteinogenic_amino_acid#Mass_spectrometry)) to add together all the residues in your sequence.
If you require a very precise value or want to make sure you match an existing example, care must be taken to synchronize isotopic [abundance tables](https://en.wikipedia.org/wiki/Natural_abundance#Natural_isotope_abundance_of_some_elements) and calculate your own table of masses.

|Amino acid|Short|Abbrev.|Mono. mass (Da)|Avg. mass (Da)|
|----------|-----|-------|---------------|--------------|
|Alanine|A|Ala|71.03711|71.0779|
|Cysteine|C|Cys|103.00919|103.1429|
|Aspartic acid|D|Asp|115.02694|115.0874|
|Glutamic acid|E|Glu|129.04259|129.1140|
|Phenylalanine|F|Phe|147.06841|147.1739|
|Glycine|G|Gly|57.02146|57.0513|
|Histidine|H|His|137.05891|137.1393|
|Isoleucine|I|Ile|113.08406|113.1576|
|Lysine|K|Lys|128.09496|128.1723|
|Leucine|L|Leu|113.08406|113.1576|
|Methionine|M|Met|131.04049|131.1961|
|Asparagine|N|Asn|114.04293|114.1026|
|Pyrrolysine|O|Pyl|237.14773|237.2982|
|Proline|P|Pro|97.05276|97.1152|
|Glutamine|Q|Gln|128.05858|128.1292|
|Arginine|R|Arg|156.10111|156.1857|
|Serine|S|Ser|87.03203|87.0773|
|Threonine|T|Thr|101.04768|101.1039|
|Selenocysteine|U|Sec|150.95364|150.0489|
|Valine|V|Val|99.06841|99.1311|
|Tryptophan|W|Trp|186.07931|186.2099|
|Tyrosine|Y|Tyr|163.06333|163.1733|

## Consider additional modifications

A proteoform can be decorated with a variety of modifications that will affect its mass. These might include
[post-translational modifications (PTMs)](https://en.wikipedia.org/wiki/Post-translational_modification),
[lipids](https://en.wikipedia.org/wiki/Lipid), or
[glycosylations](https://en.wikipedia.org/wiki/Glycosylation).

## Just add water

Lastly, the residue masses do not include "stabilizing" atoms that are required for a polypeptide. Specifically, a hydrogen atom must be added to make a complete [N-terminus](https://en.wikipedia.org/wiki/N-terminus) and hydrogen and oxygen atoms must be added to make a complete [C-terminus](https://en.wikipedia.org/wiki/C-terminus). Simply put, add H<sub>2</sub>O at the end to complete the proteoform.
