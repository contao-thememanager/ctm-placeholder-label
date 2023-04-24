<?php

declare(strict_types=1);

namespace ContaoThemeManager\PlaceholderLabel;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class ContaoThemeManagerPlaceholderLabel extends Bundle
{
    public function getPath(): string
    {
        return \dirname(__DIR__);
    }
}
