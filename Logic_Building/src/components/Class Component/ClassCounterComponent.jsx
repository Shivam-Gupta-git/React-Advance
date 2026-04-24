import React, { Component } from "react";

class ClassCounterComponent extends Component {
  constructor() {
    super();
    this.state = { counte: 0 };
  }

  render() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-10 text-center w-[300px]">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Class Component
          </h1>
          <h1 className="text-5xl font-bold text-white mb-6">
            {this.state.counte}
          </h1>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => this.setState({ counte: this.state.counte + 1 })}
              className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-300 shadow-lg"
            >
              Increase
            </button>

            {this.state.counte >= 1 && (
              <button
                onClick={() => this.setState({ counte: this.state.counte - 1 })}
                className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition duration-300 shadow-lg"
              >
                Decrease
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ClassCounterComponent;
