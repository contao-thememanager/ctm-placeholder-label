<?php

declare(strict_types=1);

namespace ContaoThemeManager\PlaceholderLabel\ContaoManager;

use Contao\CoreBundle\ContaoCoreBundle;
use Contao\ManagerPlugin\Bundle\BundlePluginInterface;
use Contao\ManagerPlugin\Bundle\Config\BundleConfig;
use Contao\ManagerPlugin\Bundle\Parser\ParserInterface;
use ContaoThemeManager\PlaceholderLabel\ContaoThemeManagerPlaceholderLabel;
use ContaoThemeManager\Core\ContaoThemeManagerCore;

class Plugin implements BundlePluginInterface
{
    /**
     * {@inheritdoc}
     */
    public function getBundles(ParserInterface $parser): array
    {
        return [
            BundleConfig::create(ContaoThemeManagerPlaceholderLabel::class)
                ->setLoadAfter([
                    ContaoCoreBundle::class,
                    ContaoThemeManagerCore::class,
                ])
                ->setReplace(['ctm-placeholder-label']),
        ];
    }
}
