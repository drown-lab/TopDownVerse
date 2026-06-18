---
sidebar_position: 3
sidebar_label: 1.3 Reversed-Phase LC
---

# 1.3 Reversed-Phase LC for Intact Proteins

Reversed-phase LC is the default online separation for top-down LC-MS, and rightly so — it's robust, directly MS-compatible, and gives sharp peaks for proteins well-suited to it. But the rules you learned for peptide RPLC don't all transfer cleanly to intact proteins, and a few concrete choices make a large difference in what you can actually identify. This section is aimed at someone sitting down to do method development.

## Stationary phase: chemistry and pore size

Two choices dominate intact-protein RPLC: the bonded-phase chemistry and the pore size.

On **chemistry**, short alkyl chains (C4, and the shorter C3) are standard because long chains (C18) retain large proteins too tightly and bleed recovery; C8 sits in between. The trade-off is always *retention versus recovery* — you want just enough hydrophobic grip to focus the protein at the head of the gradient and still let it elute cleanly.[^astefanei2016] **Phenyl/diphenyl** phases add aromatic (π–π) selectivity that is orthogonal to plain hydrophobicity; they can resolve closely related proteoforms and let you run milder conditions — a high-coverage phenyl phase delivered >90% recovery of intact mAbs at markedly lower temperature and TFA than a C4 column required.[^bobaly2018] **Polymeric PS-DVB** phases (PLRP-S) are silica-free, so they eliminate the residual-silanol secondary interactions that tail and adsorb proteins, and they tolerate extreme pH and temperature.[^astefanei2016]

**Pore size** matters more than it does for peptides, because a protein has to physically fit inside the pore to ever see the bonded surface. The conventional ~300 Å "wide pore" is fine for peptides and small proteins, but larger species are partially excluded: a kinetic study found a 450 Å particle best for an intact antibody, while 300 Å sufficed only up to ~25 kDa.[^jaag2022] For the largest intact proteins and mAbs, dedicated wide-pore C4/diphenyl materials of 1000 Å and up to ~1500 Å are the practical choice — those specific figures come from column specifications and field practice rather than a single landmark study, but the underlying exclusion rationale is well established.[^astefanei2016] Be aware, too, that very large proteins adsorb more than their size alone predicts, through secondary ionic and hydrogen-bonding interactions, so at high mass *recovery* — not resolution — is often the limiting factor.[^fekete2014]

## Temperature

Running columns hot (commonly 60–80 °C) sharpens intact-protein peaks and improves recovery by speeding mass transfer and weakening the silanol-mediated secondary interactions that cause tailing. Pushing the mobile phase to 80–90 °C measurably reduces adsorption of intact mAbs and raises recovery — but heat plus on-column residence time can degrade the protein, so it's a balance, not a free lunch.[^fekete2012temp] The right phase buys you milder conditions: on a high-coverage phenyl column, intact mAbs ran well at 75 °C (subunits at 65 °C), and 60 °C is often enough to keep on-column degradation low while still giving good chromatography.[^bobaly2018][^khalikova2021] The early systematic study by Wang and colleagues (a C18 column at 60 °C with TFA, on intact yeast proteins) remains a useful starting reference point.[^wang2005]

## Ion-pairing reagent: the TFA / FA / DFA triangle

This is the choice that most directly trades chromatography against MS signal. **TFA** is the strongest ion-pairing acid — best peak shape and resolution, because it suppresses secondary interactions — but it is also a potent ESI signal suppressor. **Formic acid (FA)** is the opposite: much better electrospray sensitivity, noticeably worse peak shape for proteins. For years there was no clean universal replacement; the gains from alternative additives were analyte- and instrument-dependent and rarely paid back the lost resolution.[^garcia2005]

The modern compromise worth knowing is **difluoroacetic acid (DFA)**. Less acidic and less hydrophobic than TFA, it lowers electrospray droplet surface tension and delivers roughly 3× higher MS sensitivity than TFA while giving resolution better than *both* FA and TFA, with improved recovery.[^nguyen2019] An independent additive screen identified DFA as the most promising TFA alternative for RPLC-MS of intact proteins (while TFA remained best for HILIC).[^lardeux2021] If you'd rather not switch reagents, a 0.03% TFA / 0.07% FA blend recovers much of TFA's chromatography while boosting MS sensitivity, and plenty of labs still run TFA in a first offline dimension and FA online to the MS.[^bobaly2018][^khalikova2021]

## Column length and pressure

Shen and colleagues showed that long (≥1 m) capillary columns at ultrahigh pressure push peak capacities above 400 for proteoforms under 50 kDa — close to what routine peptide LC achieves.[^shen2017] For most users, a 25–50 cm capillary column is a good balance of resolution and practicality.

## Multidimensional RPLC

Two-dimensional separations using orthogonality between high-pH and low-pH RP modes, or between polymeric and silica-based phases, are a powerful way to extend coverage without leaving the RP family entirely. Valeja and colleagues integrated this with ion-exchange and HIC in a 3D platform,[^valeja2015] and Wang and colleagues developed an online 2D high-pH/low-pH ultrahigh-pressure nano-LC system that identified over 1,000 proteoforms from 5 µg of starting material.[^wang2020] Kaulich and colleagues recently demonstrated a complementary low/low pH 2D scheme using PLRP-S in the first dimension that identified more than 4,900 proteoforms from Caco-2 cells.[^kaulich2023]

One honest reality check: intact-protein RPLC peak widths are typically broader than peptide peak widths, and the mass range above ~50 kDa remains genuinely hard. Don't be discouraged if your first runs don't match the beautiful chromatograms in the literature — those are almost always from optimized platforms on well-behaved samples. Much of that difficulty is recovery and adsorption loss rather than chromatography per se; see [§1.6 — Carryover, Recovery, and Adsorptive Loss](./carryover-recovery-adsorption.md).

:::note[Figure 1.3 — planned]
Overlaid base-peak chromatograms of the same intact-protein standard run on C4, C8, and PLRP-S columns at 60 °C with TFA vs. FA ion-pairing, with peak-capacity calculations annotated.
:::

[^astefanei2016]: Astefanei A, Dapic I, Camenzuli M. *Chromatographia* **80**, 665–687 (2017). "Different stationary phase selectivities and morphologies for intact protein separations." [DOI: 10.1007/s10337-016-3168-z](https://doi.org/10.1007/s10337-016-3168-z)
[^bobaly2018]: Bobály B, D'Atri V, Lauber M, Beck A, Guillarme D, Fekete S. *J. Chromatogr. B* **1096**, 1–10 (2018). "Characterizing various monoclonal antibodies with milder reversed phase chromatography conditions." [DOI: 10.1016/j.jchromb.2018.07.039](https://doi.org/10.1016/j.jchromb.2018.07.039)
[^jaag2022]: Jaag S, Wen C, Peters B, Lämmerhofer M. *J. Chromatogr. A* **1676**, 463251 (2022). "Kinetic performance comparison of superficially porous, fully porous and monolithic reversed-phase columns by gradient kinetic plots for the separation of protein biopharmaceuticals." [DOI: 10.1016/j.chroma.2022.463251](https://doi.org/10.1016/j.chroma.2022.463251)
[^fekete2014]: Fekete S, Beck A, Wagner E, Vuignier K, Guillarme D. *J. Sep. Sci.* **38**, 1–8 (2015). "Adsorption and recovery issues of recombinant monoclonal antibodies in reversed-phase liquid chromatography." [DOI: 10.1002/jssc.201400996](https://doi.org/10.1002/jssc.201400996)
[^fekete2012temp]: Fekete S, Rudaz S, Veuthey JL, Guillarme D. *J. Sep. Sci.* **35**, 3113–3123 (2012). "Impact of mobile phase temperature on recovery and stability of monoclonal antibodies using recent reversed-phase stationary phases." [DOI: 10.1002/jssc.201200297](https://doi.org/10.1002/jssc.201200297)
[^khalikova2021]: Khalikova MA, Skarbalius L, Naplekov DK, Jadeja S, Švec F, Lenčo J. *Talanta* **233**, 122512 (2021). "Evaluation of strategies for overcoming trifluoroacetic acid ionization suppression resulted in single-column intact level, middle-up, and bottom-up reversed-phase LC-MS analyses of antibody biopharmaceuticals." [DOI: 10.1016/j.talanta.2021.122512](https://doi.org/10.1016/j.talanta.2021.122512)
[^garcia2005]: García MC. *J. Chromatogr. B* **825**, 111–123 (2005). "The effect of the mobile phase additives on sensitivity in the analysis of peptides and proteins by high-performance liquid chromatography-electrospray mass spectrometry." [DOI: 10.1016/j.jchromb.2005.03.041](https://doi.org/10.1016/j.jchromb.2005.03.041)
[^nguyen2019]: Nguyen JM, Smith J, Rzewuski S, Legido-Quigley C, Lauber MA. *mAbs* **11**, 1358–1366 (2019). "High sensitivity LC-MS profiling of antibody-drug conjugates with difluoroacetic acid ion pairing." [DOI: 10.1080/19420862.2019.1658492](https://doi.org/10.1080/19420862.2019.1658492)
[^lardeux2021]: Lardeux H, Duivelshof BL, Colas O, Beck A, McCalley DV, Guillarme D, D'Atri V. *Anal. Chim. Acta* **1156**, 338347 (2021). "Alternative mobile phase additives for the characterization of protein biopharmaceuticals in liquid chromatography — mass spectrometry." [DOI: 10.1016/j.aca.2021.338347](https://doi.org/10.1016/j.aca.2021.338347)
[^wang2005]: Wang Y, Balgley BM, Rudnick PA, Lee CS. *J. Chromatogr. A* **1073**, 35–41 (2005). "Effects of chromatography conditions on intact protein separations for top-down proteomics." [DOI: 10.1016/j.chroma.2004.08.140](https://doi.org/10.1016/j.chroma.2004.08.140)
[^shen2017]: Shen Y, Tolić N, Piehowski PD, et al. *J. Chromatogr. A* **1498**, 99–110 (2017). "High-resolution ultrahigh-pressure long column reversed-phase liquid chromatography for top-down proteomics." [DOI: 10.1016/j.chroma.2017.01.008](https://doi.org/10.1016/j.chroma.2017.01.008)
[^valeja2015]: Valeja SG, Xiu L, Gregorich ZR, Guner H, Jin S, Ge Y. *Anal. Chem.* **87**, 5363–5371 (2015). "Three dimensional liquid chromatography coupling ion exchange chromatography/hydrophobic interaction chromatography/reverse phase chromatography for effective protein separation in top-down proteomics." [DOI: 10.1021/acs.analchem.5b00657](https://doi.org/10.1021/acs.analchem.5b00657)
[^wang2020]: Wang Z, Yu D, Cupp-Sutton KA, Liu X, Smith K, Wu S. *Anal. Chem.* **92**, 12774–12777 (2020). "Development of an online 2D ultrahigh-pressure nano-LC system for high-pH and low-pH reversed phase separation in top-down proteomics." [DOI: 10.1021/acs.analchem.0c03395](https://doi.org/10.1021/acs.analchem.0c03395)
[^kaulich2023]: Kaulich PT, Cassidy L, Tholey A. *Proteomics* **24**, e2200542 (2023). "Identification of proteoforms by top-down proteomics using two-dimensional low/low pH reversed-phase liquid chromatography-mass spectrometry." [DOI: 10.1002/pmic.202200542](https://doi.org/10.1002/pmic.202200542)
