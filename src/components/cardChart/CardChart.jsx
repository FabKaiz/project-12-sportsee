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
  const [value, setValue] = useState(null)

  useEffect(() => {
    const translateDataAndSetIcon = () => {
      switch (data[0]) {
        case 'calorieCount':
          setValue((data[1] / 1000).toFixed(3).replace('.', ',') )
          setValueUnit('kCal')
          return 'Calories'
        case 'proteinCount':
          setValue(data[1])
          setCardIcon(ProteinIcon)
          return 'Protéines'
        case 'carbohydrateCount':
          setValue(data[1])
          setCardIcon(CarbohydrateIcon)
          return 'Glucides'
        case 'lipidCount':
          setValue(data[1])
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
                  {value}{valueUnit}
                </span>
                <div className={styles.cardChart_type}>{translatedData}</div>
              </div>
            </div>
        )}
      </>

  );
};

export default CardChart;