import React from "react";
import { useTranslation } from "react-i18next";

const HBT: React.FC = () => {
  React.useEffect(() => {
    document.title = "DataPanda | Healthcare and BioTech";
  }, []);
  const { t } = useTranslation("Header");

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-7">
        <div className="sm:col-span-7 md:col-span-7 lg:col-span-6">
          <h1 className="text-3xl text-primary font-bold mb-7">{t("HBT")}</h1>
          <p className="mb-2 text-body-color">{t("please")}</p>
        </div>
      </div>
    </section>
  );
};

export default HBT;
