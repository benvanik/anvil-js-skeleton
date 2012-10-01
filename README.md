# {<ANVIL_PROJECT_NAME>}

Something something.

## Getting Started

    git clone git@github.com:someone/{<ANVIL_PROJECT_NAME>}.git
    cd {<ANVIL_PROJECT_NAME>}/
    source {<ANVIL_PROJECT_NAMESPACE>}rc
    anvil serve -p 8080 &
    anvil build :fast :debug :release
    open http://localhost:8080/examples/something.html?uncompiled

    # Edit-reload works, but run this if you change a goog.provide/require:
    anvil build :fast

    # Build and copy the '{<ANVIL_PROJECT_NAMESPACE>}_js_compiled.js' file someplace:
    anvil deploy -o /tmp/foo/ :release

## License

BSD
