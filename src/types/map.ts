import { PropertyCardProps } from "@/components/common/PropertyCard";

export type MapPropertyItem = PropertyCardProps & {
  warrantPrice?: number;
  dealPrice?: number;
  direction?: string;
  floorInfo?: string;
  exposureAddress?: string;
  etcFeeAmount?: number;
  moveInPossibleYmd?: string;
  articleFeatureDesc?: string;
  detailDescription?: string;
  latitude: number;
  longitude: number;
  realtorName?: string;
  representativeName?: string;
  realtorAddress?: string;
  representativeTelNo?: string;
  cellPhoneNo?: string;
  maxBrokerFee?: number;
  brokerFee?: number;
};
