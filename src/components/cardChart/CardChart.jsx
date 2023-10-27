import styles from './cardChart.module.scss'
import { useEffect, useState } from "react";

import CaloriesIcon from '/assets/calories-icon.png?url'
import ProteinIcon from '/assets/protein-icon.png?url'
import CarbohydrateIcon from '/assets/carbs-icon.png?url'
import LipidIcon from '/assets/fat-icon.png?url'

const CardChart = ({data}) => {
  const [valueUnit, setValueUnit] = useState('g')
  const [translatedData, setTranslatedData] = useState(null)
  const [cardIcon, setCardIcon] = useState(CaloriesIcon)

  useEffect(() => {
    const translateDataAndSetIcon = () => {
      switch (data[0]) {
        case 'calorieCount':
          setValueUnit('kCal')
          return 'Calories'
        case 'proteinCount':
          setCardIcon(ProteinIcon)
          return 'Protéines'
        case 'carbohydrateCount':
          setCardIcon(CarbohydrateIcon)
          return 'Glucides'
        case 'lipidCount':
          setCardIcon(LipidIcon)
          return 'Lipides'
        default:
          return data[0]
      }
    }
    setTranslatedData(translateDataAndSetIcon())
  }, [data])

  return (
      <>
        {data && (
            <div className={styles.cardChart_container}>
              <div className={styles.cardChart_icon}>
                <img src={cardIcon} alt={`${translatedData}`} />
              </div>
              <div>
                <span className={styles.value}>
                  {data[1]}{valueUnit}
                </span>
                <div className={styles.cardChart_type}>{translatedData}</div>
              </div>
            </div>
        )}
      </>

  );
};

export default CardChart;