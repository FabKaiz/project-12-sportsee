import styles from './activityCustomTooltip.module.scss'

// Custom tooltip for the chart
// https://recharts.org/en-US/examples/CustomContentOfTooltip

const ActivityCustomTooltip = ({active, payload}) => {
      if (active && payload && payload.length) {
        return (
            <div className={styles.tooltip}>
              <p>{payload[0].value + 'kg'}</p>
              <p>{payload[1].value + 'Kcal'}</p>
            </div>
        )
      }
      return null
    }
;

export default ActivityCustomTooltip;