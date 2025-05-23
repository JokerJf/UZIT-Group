import React from "react";
import { t } from "i18next";
import styles from "./Map.module.scss";

const Map = () => {
  return (
    <div>
      <div className={styles.wrapperMap}>
        <h1 className={styles.title}>{t("markaz.map.title")}</h1>
        <div style="position:relative;overflow:hidden;">
          <a
            href="https://yandex.uz/maps/org/uzit_group/41170032874/?utm_medium=mapframe&utm_source=maps"
            style="color:#eee;font-size:12px;position:absolute;top:0px;"
          >
            
          </a>
          <a
            href="https://yandex.uz/maps/10334/samarkand/category/it_company/184106174/?utm_medium=mapframe&utm_source=maps"
            style="color:#eee;font-size:12px;position:absolute;top:14px;"
          >
            
          </a>
          <a
            href="https://yandex.uz/maps/10334/samarkand/category/marketing_services/184105524/?utm_medium=mapframe&utm_source=maps"
            style="color:#eee;font-size:12px;position:absolute;top:28px;"
          >
            
          </a>
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=66.989284%2C39.688934&mode=search&oid=41170032874&ol=biz&z=17"
            frameborder="0"
            allowfullscreen="true"
            style="position:relative;"
            className={styles.map}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
