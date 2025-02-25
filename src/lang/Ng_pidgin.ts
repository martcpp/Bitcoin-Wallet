/* eslint-disable no-unused-vars */

import Language from '@/lang/langInterface'

/* eslint-enable no-unused-vars */

var Ng_pidgin = <Language> {
    // Initial page
    getting_started: 'make we start',
    create_new: 'open new wallet',
    create_subtext: "We go open  new wallet for you so you fit begin to dey use Bitcoin.(BTC)",
    restore_existing: 'recover wallet were you don Open before',
        ',
    restore_subtext: "You ben get wallet and you want  use your recovery words take get ahm back.",
    change_language: 'Change go another language', 
    choose_language: 'select another Language',

    // Create page
    seed_phrase: "Recovery Words",
    wrote_it_down: 'I ben write ahm down somewhere ',
    generate: 'Generate',
    warning: 'Warning',
    we_will_generate: 'We go help you generate 12 recovery words.',
    warning_text_1: "Write the words them down as you take see ahm, and keep ahm well, offline. If you forget ahm you no fit get you bitcoin back again.",
    warning_text_2: "These recovery words will allow you to recover your wallet. Write the words down and keep them safe, offline.",
    write_it_down: 'Write it down',
    keep_it_safe: 'Keep it safe',
    do_not_lose_it: 'Don’t lose it',
    have_saved: 'I have saved my recovery words safely.',

    // Restore page
    restore_notice: 'Please enter your recovery words to restore your wallet.',
    restore_warning: 'The recovery words you have entered are invalid. Words must be spelled correctly and have no capital letters.',
    restoring: 'Restoring...',

    // Wallet home
    refresh: 'Refresh',
    overview: 'Overview',
    send: 'Send',
    receive: 'Receive',
    settings: 'Settings',
    amount_to_send: 'Amount to send',
    not_enough_balance: 'Not enough balance to send that amount',
    send_max: 'Send max',
    amount: 'Amount',
    miner_fee: 'Network fee',
    total: 'Total',
    confirmation: 'Confirmation',
    they_receive: 'They receive',
    recepient: 'Recepient',
    sending: 'Sending...',
    are_you_sure: 'Are you sure you want to send this transaction?',
    im_sure: "Yes I'm sure, send",
    seed_modal: 'Recovery Words',
    transaction: 'transaction',
    transactions: 'transactions',
    buy_bitcoin: 'Buy Bitcoin',

    // Pagination
    page: 'Page', // Displayed as 'Page 1 of 1'
    of: 'of',

    // Overview
    total_balance: "Total Balance",
    no_transactions: "You have not made any transactions yet",
    what_to_do: "What would you like to do?",
    date: 'Date',
    status: 'Status',
    processing: 'Processing',
    unconfirmed: 'Unconfirmed',
    complete: 'Complete',

    // Send
    send_to: 'Send only to Bitcoin (BTC) addresses',
    bitcoin_address: 'Bitcoin address',
    address: 'Address',
    low_priority: 'Low priority',
    standard: 'Standard',
    important: 'Important',
    low_priority_desc: "You pay less in fees, but you consider this a low-priority transaction and you don't mind possibly waiting longer for confirmation.",
    standard_desc: "This will use a moderate fee, during times of high congestion this may lead to longer confirmation time, but these are rare.",
    important_desc: "Uses a premium fee to target confirmation within 30 minutes, this is a high priority transaction and you want it confirmed quickly.",
    not_enough: "You don't have enough to send that amount and also pay the network fee. Try sending your entire balance with the Send Max button instead.",
    dust_error: "The amount you are trying to send is too small for the Bitcoin network to process.",
    bitcoin_network_fee: "Bitcoin Network fee",

    // Receive
    receive_only: 'Receive only Bitcoin',
    wallet_address: 'Wallet address',
    address_below: 'to the address below',

    // Settings
    show_seed: 'Recovery',
    language: 'Language',
    currency: 'Currency',
    exit_wallet: 'Exit wallet',

    // Buttons
    back_button: 'Back',
    restore_button: 'Restore',
    next_button: 'Next',
    ok_button: 'OK',
    copy_button: 'Copy',
    save_button: 'Save',

    // Notification
    notification_title: 'Incoming Transaction',

    // Exit wallet
    exit_text: 'This will destroy your wallet files and all records of your transactions. The only way to restore your wallet will be through your recovery words',
    exit_are_you_sure: 'Are you sure you want to delete and exit this wallet?',
    exit_label_text: 'Yes, delete this wallet',
    exit_delete: 'Delete'
}

export default Ng_pidgin
