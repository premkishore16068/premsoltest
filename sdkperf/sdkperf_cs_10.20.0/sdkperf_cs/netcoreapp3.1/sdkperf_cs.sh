#!/bin/sh

# ---------------------------------------------
#
# Solace Systems sdkperf_cs startup script.
#
# ---------------------------------------------
ERROR=0
which dotnet || ERROR=1
if [ "$ERROR" = "1" ]; then
    echo "Missing dotnet runtime from Path" 
    exit 1
fi

PROGRAM_DIR=`dirname "$0"`

export LD_LIBRARY_PATH=$PROGRAM_DIR/runtimes/linux-x64/native:$PROGRAM_DIR/runtimes/linux-x86/native:$LD_LIBRARY_PATH
export DYLD_LIBRARY_PATH=$PROGRAM_DIR/runtimes/osx-x64/native:$DYLD_LIBRARY_PATH

echo "Running sdkperf_cs from $PROGRAM_DIR"
dotnet $PROGRAM_DIR/sdkperf_cs.dll $@ || ERROR=1

if [ "$ERROR" = "1" ]; then
    echo "Error running sdkperf_cs"; 
    exit 1
fi

exit $ERROR