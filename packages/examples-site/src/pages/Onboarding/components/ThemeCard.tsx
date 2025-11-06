import React, { FunctionComponent } from "react";
import {
  Badge,
  Small,
  H4,
} from "@bigcommerce/big-design";
import {
  ThemeCardThumbnail,
  ThemeCardContainer,
  FeatureList,
  ThemeCardLink,
  SrOnly,
  SelectedBadge,
  ThemeCardDetails,
} from "./ThemeCard.styled";

export interface ThemeCardProps {
  themeName: string;
  features: string[];
  price: string | number;
  thumbnail: string;
  detailsLink: string;
  isSelected: boolean;
  onSelect?: () => void;
}

export const ThemeCard: FunctionComponent<ThemeCardProps> = ({
  themeName,
  features,
  price,
  thumbnail,
  detailsLink,
  isSelected,
  onSelect,
}) => {
  return (
    <ThemeCardContainer className={isSelected ? "selected" : ""}>
      <ThemeCardThumbnail src={thumbnail} alt={`${themeName} thumbnail`} />
      <ThemeCardDetails className={isSelected ? "selected" : ""}>
        <Small bold margin="none">
          <ThemeCardLink
            href={detailsLink}
            target="_blank"
            rel="noopener noreferrer"
            className={isSelected ? "selected" : ""}
          >
            {themeName}
          </ThemeCardLink>
        </Small>
        <SrOnly>
          <H4>Features</H4>
        </SrOnly>
        <FeatureList>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </FeatureList>
        <SrOnly>Price: </SrOnly>
        <Small margin="none">
          {typeof price === "number"
            ? price === 0
              ? "FREE"
              : `$${price}`
            : price}
        </Small>
      </ThemeCardDetails>
      {isSelected && (
        <SelectedBadge>
          <Badge label="Selected" variant="primary" />
        </SelectedBadge>
      )}
    </ThemeCardContainer>
  );
};
