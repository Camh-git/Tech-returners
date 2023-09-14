export interface IProperty {
  property: {
    location: string;
    country: string;
    property_type: string;
    bedroom_count: number;
    bathroom_count: number;
    price: string;
    image_urls: string[];
    title: string;
    description: string;
  };
}

export const Card: React.FC<IProperty> = ({
  property: {
    title,
    location,
    country,
    property_type,
    image_urls,
    description,
    bedroom_count,
    bathroom_count,
    price,
  },
}) => {
  return (
    <div className="border-4 border-solid border-black rounded-xl bg-blue-100 hover:bg-blue-400  flex m-4">
      <div className="w-1/4">
        <img src={image_urls[0]} className="max-h-64 w-full" />
      </div>
      <div className="w-3/4 p-1">
        <h4 className="text-xl font-extrabold">{title}</h4>
        <p className="inline">{location}</p>
        <p className="inline m-3">{country}</p>
        <p>{property_type}</p>

        <p className="inline">Bedrooms: {bedroom_count}</p>
        <p className="inline m-3">Bathrooms: {bathroom_count}</p>
        <p>{description}</p>
        <p className="font-extrabold">{price}</p>
      </div>
    </div>
  );
};
