import { Component } from 'react'

type StateT = {
  count: number
}

export class ClassComponent extends Component<{}, StateT> {
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  decrement() {
    this.setState({ count: this.state.count - 1 })
  }

  componentDidMount(): void {
    console.log('class => mount')
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log('class update')
  }

  componentWillUnmount(): void {
    console.log('class unmount')
  }

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<StateT>,
    nextContext: any
  ): boolean {
    return true
  }

  render() {
    return (
      <>
        <div className="text-center">Class Component</div>
        <div className="flex justify-center gap-2 items-center">
          <div className="block">Count {this.state.count}</div>
          <button className="px-2 py-4" onClick={() => this.increment()}>
            +
          </button>
          <button className="px-2 py-4" onClick={() => this.decrement()}>
            -
          </button>
        </div>
      </>
    )
  }
}
