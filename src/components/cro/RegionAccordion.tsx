type Region = {
  name: string;
  href?: string;
};

type RegionAccordionProps = {
  title?: string;
  regions: Region[];
  defaultOpen?: boolean;
};

export function RegionAccordion({
  title = "Ver todas as regiões atendidas",
  regions,
  defaultOpen = false,
}: RegionAccordionProps) {
  return (
    <details className="cns-regions-accordion" open={defaultOpen || undefined}>
      <summary className="cns-regions-accordion__summary">
        <span>{title}</span>
        <span className="cns-regions-accordion__chevron" aria-hidden="true">
          +
        </span>
      </summary>

      <nav className="cns-regions-accordion__content" aria-label="Regiões atendidas">
        <ul className="cns-regions-accordion__list">
          {regions.map((region) => (
            <li key={region.href ?? region.name}>
              {region.href ? <a href={region.href}>{region.name}</a> : <span>{region.name}</span>}
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
