const withChildFunction = (fn) => (View) => {
  return (props) => {
    return (
      <View {...props}>
        {fn}
      </View>
    )
  }
}

export default withChildFunction
