import styles from './sessionCustomTooltip.module.scss'

const SessionCustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className={styles.tooltip}>
				<p>{payload[0].value + ' min'}</p>
			</div>
		)
	}
	return null
}

export default SessionCustomTooltip;