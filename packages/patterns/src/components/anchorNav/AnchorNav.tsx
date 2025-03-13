import React, { FunctionComponent, ReactNode } from "react";
import { StyledAnchorNav } from "./AnchorNav.styled";
import { useIntersection } from "../../helpers/useIntersection";

export interface AnchorNavElement {
  label: string;
  element: ReactNode;
  id: string;
}

export interface AnchorNavProps {
  elements: AnchorNavElement[];
}

// Create a separate component for each panel
interface AnchorPanelProps {
  element: AnchorNavElement;
  index: number;
  onVisible: (index: number) => void;
}

const AnchorPanel: FunctionComponent<AnchorPanelProps> = ({
  element,
  index,
  onVisible,
}) => {
  const elementRef = React.useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(elementRef, "0px");

  React.useEffect(() => {
    if (isVisible) {
      onVisible(index);
    }
  }, [isVisible, index, onVisible]);

  return (
    <div ref={elementRef} id={element.id} className="anchor-nav__element">
      {element.element}
    </div>
  );
};

export const AnchorNav: FunctionComponent<AnchorNavProps> = ({ elements }) => {
  const [anchorVisible, setAnchorVisible] = React.useState(0);
  const handleVisibility = React.useCallback((elementIndex: number) => {
    setAnchorVisible(elementIndex);
  }, []);

  // Now we map to the separate component
  const anchorPanels = elements.map((element, i) => (
    <AnchorPanel
      key={element.id}
      element={element}
      index={i}
      onVisible={handleVisibility}
    />
  ));

  return (
    <StyledAnchorNav>
      <nav className="anchor-nav__list">
        <ul>
          {elements.map((element, i) => {
            return (
              <li key={element.id}>
                <a
                  className={i === anchorVisible ? `active` : ``}
                  id={`anchor_${element.id}`}
                  href={`#${element.id}`}
                  onClick={() => setAnchorVisible(i)}
                >
                  {element.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="anchor-nav__elements">{anchorPanels}</div>
    </StyledAnchorNav>
  );
};

export default AnchorNav;
