---
title: Lab 1
---

# Lab 1

## Goal

1. Run the mbed blinky example
1. Install the mbed-cli
1. Set up serial communication with the computer
1. Explore several peripherals 

## Mbed blinky

These steps will guide you to build and run a first mbed program from the browser.

1. Register your account on [os.mbed.com](https://os.mbed.com/).
1. Log in and click on compiler in the upper right corner.
1. Select the Nucleo-L476RG as your platform, by clicking the select platorm button in the upper right corner. 
    
    ![Mbed compiler overview](./assets/mbed.png)

    Figure 1: Overview of the mbed compiler. Select the Nucleo-L476RG platform.

1. Create a new program. Select the *mbed OS Blinky LED HelloWorld* template.

    ![Create a new program: Blinky LED](assets/newProgram.png)

    Figure 2: Select a template and give the new program a name.

1. Connect the USB connector of the Nucleo board to the pc. The board will appear as the NODE_L476RG flash drive.
1. Open *main.cpp*. Click compile. Download the *.bin* file on the NODE_L476RG flash drive. The serial communication led will flash red/yellow when the program is loaded.
1. The file *main.cpp* contains C++ code. Syntax and programming concepts are similar to C#. For example:

    ```cpp
    #include "mbed.h"
    #include "platform/mbed_thread.h"


    // Blinking rate in milliseconds
    #define BLINKING_RATE_MS 500


    int main()
    {
        // Initialize the digital pin LED1 as an output
        DigitalOut led(LED1);

        while (true) {
            led = !led;
            thread_sleep_for(BLINKING_RATE_MS);
        }
    }
    ```
::: tip
Mbed provides an extensive library of classes with example code. One of these classes is the DigitalOut class to drive an output pin. Check out the documentation of the [DigitalOut class](https://os.mbed.com/docs/mbed-os/v5.15/apis/digitalout.html).
:::

::: warning Assignment
Write a program, which turns on the led for 3 seconds and turns it off for 1 second. Repeat this behavior 5 times.
::: 

## Mbed CLI

Following these instructions, you will install the mbed-cli toolchain and build a first program with it, to test your installation.

1. [Download](https://os.mbed.com/docs/mbed-os/v5.15/quick-start/offline-with-mbed-cli.html) and install the Mbed CLI. This is a command line tool, which allows to develop for mbed on your own machine. 

    ::: tip Pro Tip
    Do not install the mbed cli in a path with spaces or characters other than alphanumeric, dash or underscore.
    :::
1. Open a command line shell, e.g. Powershell and execute: 

    ```bash
    mbed import https://github.com/ARMmbed/mbed-os-example-blinky
    cd mbed-os-example-blinky
    ```

    ::: tip Possible Fix
    If the shell was open during the installer, it will not recognize the mbed command. Close the shell and reopen it, to fix this problem.
    :::
1. Download and install the latest [GNU Arm Embedded Toolchain](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads). This contains the GCC for ARM Embedded compiler. 

    ::: tip Don't forget
    The tools have to be added to the PATH environment variable. At the end of the installer you can select to **Add path to environment variable.**

    The mbed-cli installer contains an older version of the toolchain. Remove it from your Path Environment Variable: search in Windows settings for environment, 
    ![Remove the environment variable of the old toolchain installation](./assets/environment.png)
    
    Figure 3: Change the PATH environment variable. 
    :::

1. Go to the [Nucleo-L476RG mbed website](https://os.mbed.com/platforms/ST-Nucleo-L476RG/) to discover the target name.
    
    ![Nucleo-L476RG mbed website](./assets/platformName.png)
    
    Figure 4: Find the target name on the platform website.
1. Execute the compilation command:
    ```bash
        mbed compile --target nucleo_l476rg --toolchain GCC_ARM --flash
    ```

    ::: tip
    If your board is plugged in the **--flash** flag will automagically copy the *.bin* file to the board. If you did not include this flag, you will have to manually copy the *.bin* file from the **./BUILD/NUCLEO_L476RG/GCC_ARM** folder.
    :::
1. Check if the blinky led program is correctly loaded on your board.

## Serial communication

Next, set up serial communication between your PC and the Nucleo board.


1. Add a *Serial* object on the **USBRX** and **USBTX** pins in **main.cpp**.
1. Use the *Serial* object to send a string with *printf*.
1. Your **main.cpp** will look like this:
    
    ```cpp
    #include "mbed.h"
    #include "platform/mbed_thread.h"


    // Blinking rate in milliseconds
    #define BLINKING_RATE_MS 500


    int main()
    {
        // Initialize the digital pin LED1 as an output
        DigitalOut led(LED1);
        // Initialize the serial UART on the USB Transmit and Receive pins
        Serial pc(USBTX, USBRX);
        // Print a string on the serial port
        pc.printf("Hello World!\n");
        while (true) {
            led = !led;
            thread_sleep_for(BLINKING_RATE_MS);
        }
    }
    ```
1. Compile and flash your program to the board.
1. Download the [Putty](https://putty.org/) terminal application and run it.
1. Check on which COM port the mbed is registered:
    ```bash
        mbed detect
    ```
    
    ::: tip Output
    [mbed] Working path "C:\code\mbed\mbed-os-example-blinky" (program)

    [mbed] Detected NUCLEO_L476RG, **port COM3**, mounted D:, interface version 0221:
    [mbed] Supported toolchains for NUCLEO_L476RG
    | Target        | mbed OS 2 | mbed OS 5 |    uARM   |    IAR    |    ARM    |  GCC_ARM  | ARMC5 |
    |---------------|-----------|-----------|-----------|-----------|-----------|-----------|-------|
    | NUCLEO_L476RG | Supported | Supported | Supported | Supported | Supported | Supported |   -   |
    Supported targets: 1
    Supported toolchains: 4
    :::
1. In Putty: set up serial communication with Baudrate 9600 and the corresponding COM port.
    ![Putty serial configuration](./assets/putty.png)

    Figure 5: Putty serial configuration, Baudrate 9600 and COM3 port selected.

1. Open the connection.

    ::: warning Assignment
    Show Hello World! in Putty.
    :::

## Explore peripherals

