---
sidebar_position: 2
sidebar_label: 1.2 Prefractionation
---

# 1.2 Prefractionation Strategies (GELFrEE, PEPPI-MS, SEC, IEF)

Complex cell lysates typically contain tens of thousands of proteoforms. Even the best LC column can't separate all of those in a single run, and even the best mass spectrometer can't isolate and fragment all of them in the time a chromatographic peak lasts. The answer is prefractionation: split the sample into simpler subsets before it ever sees the LC, so each LC-MS run is working on a tractable problem.

The historically dominant method for top-down was **GELFrEE** (gel-eluted liquid fraction entrapment electrophoresis), introduced by Tran and Doucette[^tran2008] and adopted heavily by the Kelleher group in the landmark 2011 top-down paper in *Nature*,[^tran2011] which identified more than 3,000 proteoforms from 1,043 human gene products. GELFrEE separates proteins by molecular weight in a tube gel and collects them as liquid fractions, ready for downstream cleanup. It works well but requires specialized hardware.

More recently, **PEPPI-MS** (Passively Eluting Proteins from Polyacrylamide gels as Intact species for MS), developed by Takemori and colleagues,[^takemori2020] has gained ground. PEPPI-MS uses ordinary SDS-PAGE followed by passive elution from excised gel bands in an aqueous Coomassie-containing buffer. It recovers proteins below ~100 kDa with roughly 68% median efficiency, requires no special equipment, and the whole protocol runs in under five hours. The 2025 *Nature Protocols* paper is an excellent step-by-step.[^takemori2025np] Combining PEPPI with downstream SP3 cleanup (**PEPPI-SP3**) further improves recovery of low-MW proteoforms.[^takemori2025jpr]

Other options include size-exclusion chromatography (SEC), which is gentler than gel-based methods and compatible with native conditions; the serial SEC approach developed by Cai and colleagues extended the accessible mass range above 200 kDa.[^cai2017] Isoelectric focusing and ion-exchange prefractionation are orthogonal to size and can be powerful when used in combination with a size-based first dimension.

The practical takeaway: PEPPI-MS is the most accessible entry point for most labs today, and if your facility already runs GELFrEE, there's no reason to abandon it. The Kaulich 2024 benchmarking data (see [§1.1 — Lysis and Solubilization](./lysis-solubilization.md), ref 4) shows that method choice meaningfully biases which proteoforms you see, so if you can afford to run two complementary methods on the same sample, you'll see more of the proteoform landscape than either alone.

:::note[Figure 1.2 — planned]
A 2D plot of fractionation methods placed on axes of "mass range resolved" vs. "sample throughput," with typical proteoform identification numbers and use cases annotated for each method.
:::

[^tran2008]: Tran JC, Doucette AA. *Anal. Chem.* **80**, 1568–1573 (2008). "Gel-eluted liquid fraction entrapment electrophoresis: an electrophoretic method for broad molecular weight range proteome separation." [DOI: 10.1021/ac702197w](https://doi.org/10.1021/ac702197w)
[^tran2011]: Tran JC, Zamdborg L, Ahlf DR, et al. *Nature* **480**, 254–258 (2011). "Mapping intact protein isoforms in discovery mode using top-down proteomics." [DOI: 10.1038/nature10575](https://doi.org/10.1038/nature10575)
[^takemori2020]: Takemori A, Butcher DS, Harman VM, et al. *J. Proteome Res.* **19**, 3779–3791 (2020). "PEPPI-MS: Polyacrylamide-gel-based prefractionation for analysis of intact proteoforms and protein complexes by mass spectrometry." [DOI: 10.1021/acs.jproteome.0c00303](https://doi.org/10.1021/acs.jproteome.0c00303)
[^takemori2025np]: Takemori A, Kaulich PT, Tholey A, Takemori N. *Nat. Protoc.* **20**, 1413–1438 (2025). "PEPPI-MS: gel-based sample pre-fractionation for deep top-down and middle-down proteomics." [DOI: 10.1038/s41596-024-01100-0](https://doi.org/10.1038/s41596-024-01100-0)
[^takemori2025jpr]: Takemori A, Sugiyama N, Kline JT, Fornelli L, Takemori N. *J. Proteome Res.* **24**, 850–860 (2025). "Gel-based sample fractionation with SP3-purification for top-down proteomics." [DOI: 10.1021/acs.jproteome.4c00941](https://doi.org/10.1021/acs.jproteome.4c00941)
[^cai2017]: Cai W, Tucholski T, Chen B, et al. *Anal. Chem.* **89**, 5467–5475 (2017). "Top-down proteomics of large proteins up to 223 kDa enabled by serial size exclusion chromatography strategy." [DOI: 10.1021/acs.analchem.7b00380](https://doi.org/10.1021/acs.analchem.7b00380)
